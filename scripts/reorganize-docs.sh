#!/bin/bash

# Documentation Reorganization Script
set -e

echo "🔄 Reorganizing documentation structure..."

# Create directory structure
mkdir -p docs/getting-started
mkdir -p docs/guides
mkdir -p docs/catalog
mkdir -p docs/configuration
mkdir -p docs/reference
mkdir -p docs/releases

# Move documentation files
echo "📁 Moving getting-started docs..."
mv README.md docs/getting-started/README.md

echo "📁 Moving guide files..."
mv ADD_AGENT_TEMPLATE.md docs/guides/ADD_AGENT_TEMPLATE.md
mv AGENTS_SUPPLEMENT.md docs/guides/AGENT_DISCOVERY.md

echo "📁 Moving catalog files..."
mv AGENTS_CATALOG.md docs/catalog/AGENTS_CATALOG.md

echo "📁 Moving configuration files..."
mv VERSION.json docs/configuration/VERSION.json
mv MANIFEST.md docs/configuration/MANIFEST.md

echo "📁 Moving reference files..."
mv MARKETPLACE.md docs/reference/MARKETPLACE.md
mv marketplace-registry.json docs/reference/marketplace-registry.json
mv marketplace.json docs/reference/marketplace.json
mv ORGANIZATION_SCAN_REPORT.md docs/reference/ORGANIZATION_SCAN_REPORT.md
mv agents-manifest.json docs/reference/agents-manifest.json

echo "📁 Moving release files..."
mv RELEASE_v1.0.1.md docs/releases/RELEASE_v1.0.1.md

echo "✅ Documentation reorganization complete!"
