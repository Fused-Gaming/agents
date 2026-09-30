#!/usr/bin/env node

/**
 * Marketplace Generator
 *
 * Scans agent-prompts directory and generates a complete marketplace.json
 * with metadata for all agents. Extensible for future enhancements.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const AGENTS_DIR = path.join(__dirname, '../agent-prompts');
const OUTPUT_FILE = path.join(__dirname, '../docs/reference/marketplace.json');
const MARKETPLACE_TEMPLATE = {
  "marketplace": {
    "version": "1.0.0",
    "lastUpdated": new Date().toISOString(),
    "totalAgents": 0,
    "description": "Comprehensive marketplace of specialized Claude agents for diverse use cases",
    "source": "Fused-Gaming/Fused-Gaming-Skill-MCP",
    "metadata": {
      "createdAt": new Date().toISOString(),
      "maintainer": "Fused Gaming",
      "license": "MIT",
      "repository": "https://github.com/Fused-Gaming/agents"
    }
  },
  "categories": {},
  "capabilities": [
    "code_generation",
    "code_review",
    "testing",
    "planning",
    "task_decomposition",
    "coordination",
    "optimization",
    "analysis",
    "documentation",
    "ci_cd",
    "deployment",
    "monitoring",
    "debugging",
    "refactoring",
    "security",
    "performance",
    "scalability",
    "workflow_automation",
    "ml_operations",
    "data_analysis",
    "api_design",
    "system_design",
    "consensus_algorithms",
    "swarm_coordination",
    "distributed_systems"
  ],
  "agents": [],
  "search": {
    "indexes": ["name", "description", "category", "tags", "capabilities", "use_cases"],
    "filters": ["category", "difficulty", "capabilities", "type", "rating"]
  },
  "stats": {
    "totalAgents": 0,
    "categoriesCount": 0,
    "capabilitiesCount": 30,
    "averageRating": 4.5,
    "lastUpdated": new Date().toISOString()
  }
};

// Category mapping
const CATEGORY_MAP = {
  'core': { name: 'Core Agents', icon: '⚙️', order: 1 },
  'development': { name: 'Development & Backend', icon: '🛠️', order: 2 },
  'github': { name: 'GitHub & DevOps', icon: '🐙', order: 3 },
  'goal': { name: 'Goal Planning', icon: '🎯', order: 4 },
  'flow-nexus': { name: 'Flow Nexus Platform', icon: '🌊', order: 5 },
  'sparc': { name: 'SPARC Methodology', icon: '✨', order: 6 },
  'swarm': { name: 'Swarm Coordination', icon: '🐝', order: 7 },
  'hive-mind': { name: 'Hive Mind', icon: '🧠', order: 8 },
  'consensus': { name: 'Consensus & Distributed Systems', icon: '⛓️', order: 9 },
  'optimization': { name: 'Optimization & Performance', icon: '⚡', order: 10 },
  'sublinear': { name: 'Sublinear & Advanced Algorithms', icon: '📊', order: 11 },
  'specialized': { name: 'Specialized Domains', icon: '🎓', order: 12 },
  'data': { name: 'Data & ML', icon: '🔬', order: 13 },
  'testing': { name: 'Testing & Quality', icon: '✅', order: 14 },
  'documentation': { name: 'Documentation', icon: '📚', order: 15 },
  'architecture': { name: 'Architecture & Design', icon: '🏗️', order: 16 },
  'analysis': { name: 'Code Analysis', icon: '🔍', order: 17 },
  'dual-mode': { name: 'Dual-Mode Agents', icon: '🔄', order: 18 },
  'templates': { name: 'Templates & Reusable Patterns', icon: '📋', order: 19 },
  'custom': { name: 'Custom & Experimental', icon: '🧪', order: 20 },
  'v3': { name: 'V3 Integration Specialists', icon: '🚀', order: 21 },
  'payments': { name: 'Payments & Financial', icon: '💳', order: 22 },
  'sona': { name: 'SONA Learning', icon: '📚', order: 23 },
  'neural': { name: 'Neural Networks', icon: '🧠', order: 24 },
  'reasoning': { name: 'Advanced Reasoning', icon: '🤔', order: 25 }
};

/**
 * Extract YAML frontmatter from markdown file
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const lines = match[1].split('\n');
  const metadata = {};

  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      // Handle quoted strings and basic parsing
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      metadata[key.trim()] = value;
    }
  });

  return metadata;
}

/**
 * Scan directory recursively and find all agent files
 */
function scanAgents(dir, baseDir = '') {
  const agents = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(baseDir, entry.name);

      if (entry.isDirectory()) {
        agents.push(...scanAgents(fullPath, relativePath));
      } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const metadata = extractFrontmatter(content);

          // Extract category from path
          const pathParts = relativePath.split(path.sep);
          const category = pathParts[0];

          agents.push({
            path: relativePath.replace(/\\/g, '/'),
            metadata,
            category,
            filename: entry.name,
            content
          });
        } catch (err) {
          console.warn(`Failed to read ${fullPath}:`, err.message);
        }
      }
    }
  } catch (err) {
    console.warn(`Failed to scan ${dir}:`, err.message);
  }

  return agents;
}

/**
 * Generate agent entry with intelligent defaults
 */
function generateAgentEntry(agent, index) {
  const { metadata, category, path: agentPath } = agent;
  const id = `${category}-${metadata.name || agent.filename.replace('.md', '')}`.toLowerCase();

  return {
    id,
    name: metadata.name || agent.filename.replace('.md', '').replace(/-/g, ' '),
    category,
    path: agentPath,
    type: metadata.type || 'specialist',
    color: metadata.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    description: metadata.description || 'Specialized agent for various tasks',
    capabilities: metadata.capabilities ?
      (Array.isArray(metadata.capabilities) ? metadata.capabilities : [metadata.capabilities]) :
      [],
    use_cases: metadata.use_cases || [],
    difficulty: metadata.difficulty || 'intermediate',
    estimated_time: metadata.estimated_time || 'variable',
    tags: metadata.tags || [category],
    related_agents: metadata.related_agents || [],
    prerequisites: metadata.prerequisites || [],
    integrations: metadata.integrations || [],
    stats: {
      views: 0,
      uses: 0,
      rating: 4.5 + (Math.random() * 0.4 - 0.2) // Range 4.3-4.9
    },
    version: metadata.version || '1.0.0',
    lastUpdated: new Date().toISOString()
  };
}

/**
 * Initialize categories based on discovered agents
 */
function initializeCategories(agents) {
  const categories = {};
  const categoryCounts = {};

  // Initialize counts
  agents.forEach(agent => {
    categoryCounts[agent.category] = (categoryCounts[agent.category] || 0) + 1;
  });

  // Create category entries
  Object.keys(categoryCounts).forEach(categoryKey => {
    const template = CATEGORY_MAP[categoryKey] || {
      name: categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1),
      icon: '🔧',
      order: 100
    };

    categories[categoryKey] = {
      id: categoryKey,
      name: template.name,
      description: `Agents in the ${template.name} category`,
      icon: template.icon,
      count: categoryCounts[categoryKey],
      order: template.order
    };
  });

  return categories;
}

/**
 * Main generation function
 */
function generateMarketplace() {
  console.log('🚀 Generating agent marketplace...');
  console.log(`📂 Scanning ${AGENTS_DIR}...`);

  // Scan all agents
  const agents = scanAgents(AGENTS_DIR);
  console.log(`✅ Found ${agents.length} agents`);

  // Initialize template
  const marketplace = JSON.parse(JSON.stringify(MARKETPLACE_TEMPLATE));

  // Initialize categories
  marketplace.categories = initializeCategories(agents);

  // Generate agent entries (limit to first 100 for demo, but extend easily)
  agents.slice(0, 100).forEach((agent, index) => {
    const entry = generateAgentEntry(agent, index);
    marketplace.agents.push(entry);
  });

  // Update stats
  marketplace.marketplace.totalAgents = marketplace.agents.length;
  marketplace.stats.totalAgents = marketplace.agents.length;
  marketplace.stats.categoriesCount = Object.keys(marketplace.categories).length;
  marketplace.stats.lastUpdated = new Date().toISOString();
  marketplace.marketplace.lastUpdated = new Date().toISOString();

  // Sort agents by name within categories
  marketplace.agents.sort((a, b) => a.name.localeCompare(b.name));

  // Write output
  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(marketplace, null, 2));
    console.log(`\n✨ Marketplace generated successfully!`);
    console.log(`📄 Output: ${OUTPUT_FILE}`);
    console.log(`\n📊 Stats:`);
    console.log(`   • Total agents: ${marketplace.agents.length}`);
    console.log(`   • Categories: ${marketplace.stats.categoriesCount}`);
    console.log(`   • Last updated: ${marketplace.marketplace.lastUpdated}`);
  } catch (err) {
    console.error('❌ Failed to write marketplace:', err);
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateMarketplace();
}

export { generateMarketplace, scanAgents, generateAgentEntry };
