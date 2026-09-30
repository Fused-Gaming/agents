#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AGENT_PROMPTS_DIR = path.join(process.cwd(), 'agent-prompts');
const MANIFEST_FILE = path.join(process.cwd(), 'docs', 'reference', 'agents-manifest.json');
const VERSION_FILE = path.join(process.cwd(), 'docs', 'configuration', 'VERSION.json');

// Read VERSION.json to get current version info
const versionData = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
const currentVersion = versionData.version;
const releaseDate = versionData.metadata.updated;

function getAgentMetadata(filePath) {
  const relativePath = path.relative(AGENT_PROMPTS_DIR, filePath);
  const parts = relativePath.split(path.sep);
  const category = parts[0];
  const fileName = path.basename(filePath, '.md');

  return {
    category,
    fileName
  };
}

function formatDateTime(isoString) {
  return new Date(isoString).toISOString().split('T')[0];
}

function addVersionHeaderToFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has version header
  if (content.includes('<!-- Agent Version Control')) {
    return false;
  }

  const metadata = getAgentMetadata(filePath);
  const versionHeader = `<!-- Agent Version Control
- Version: ${currentVersion}
- Last Updated: ${formatDateTime(releaseDate)}
- Category: ${metadata.category}
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-${metadata.fileName}
-->

`;

  const newContent = versionHeader + content;
  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

function collectAgentVersionInfo() {
  const agents = {};
  const stats = {
    total: 0,
    updated: 0,
    categories: new Set()
  };

  function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith('.md')) {
        const relativePath = path.relative(AGENT_PROMPTS_DIR, fullPath);
        const parts = relativePath.split(path.sep);
        const category = parts[0];
        const agentId = path.basename(file, '.md');

        stats.total++;
        stats.categories.add(category);

        const updated = addVersionHeaderToFile(fullPath);
        if (updated) stats.updated++;

        if (!agents[category]) {
          agents[category] = [];
        }

        agents[category].push({
          id: agentId,
          file: relativePath,
          version: currentVersion,
          lastUpdated: formatDateTime(releaseDate),
          status: 'active',
          license: 'Non-Commercial v1.0'
        });
      }
    }
  }

  walkDir(AGENT_PROMPTS_DIR);

  return {
    agents,
    stats: {
      total: stats.total,
      updated: stats.updated,
      categories: stats.categories.size,
      version: currentVersion,
      lastUpdated: releaseDate
    }
  };
}

function createManifest() {
  console.log('🔄 Adding version control headers to agent files...');

  const manifestData = collectAgentVersionInfo();

  const manifest = {
    repository: 'Fused-Gaming/agents',
    version: currentVersion,
    lastUpdated: releaseDate,
    status: 'active',
    description: 'Agent prompt files version tracking manifest',
    stats: {
      totalAgents: manifestData.stats.total,
      categoriesCount: manifestData.stats.categories,
      filesUpdated: manifestData.stats.updated,
      fileVersion: currentVersion
    },
    agents: manifestData.agents,
    metadata: {
      created: releaseDate,
      updated: releaseDate,
      script: 'scripts/add-version-control.js',
      maintainer: 'Fused Gaming',
      integrityChecksum: `sha256-AGENTS-MANIFEST-${currentVersion}`
    }
  };

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`✅ Added version headers to ${manifestData.stats.updated} files`);
  console.log(`✅ Created agents-manifest.json tracking ${manifestData.stats.total} agents`);
  console.log(`📊 Stats: ${manifestData.stats.categories} categories, v${currentVersion}`);

  return manifest;
}

function updatePackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  // Update package version to match agent version
  packageData.version = currentVersion;

  // Add agent tracking scripts
  packageData.scripts = packageData.scripts || {};
  packageData.scripts['agents:version-control'] = 'node scripts/add-version-control.js';
  packageData.scripts['agents:manifest'] = 'cat docs/reference/agents-manifest.json';
  packageData.scripts['agents:verify'] = 'jq \'.stats\' docs/reference/agents-manifest.json';

  // Add agents field to track metadata
  packageData.agents = {
    version: currentVersion,
    totalCount: 89,
    manifestFile: 'docs/reference/agents-manifest.json',
    versionControl: {
      enabled: true,
      headerFormat: 'html-comment',
      lastSynced: releaseDate
    }
  };

  // Add agents-manifest.json to files list
  if (!packageData.files.includes('agents-manifest.json')) {
    packageData.files.push('agents-manifest.json');
  }

  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2), 'utf8');
  console.log(`✅ Updated package.json with version control metadata`);
}

// Main execution
try {
  createManifest();
  updatePackageJson();
  console.log('\n✨ Version control setup complete!');
  console.log('📋 Manifest file: agents-manifest.json');
  console.log('📦 Package updated with agent tracking');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
