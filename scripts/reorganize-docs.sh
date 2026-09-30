#!/bin/bash

# Documentation Reorganization Script (Idempotent)
# Only moves files if they haven't already been moved

echo "🔄 Reorganizing documentation structure..."

# Create directory structure
mkdir -p docs/getting-started
mkdir -p docs/guides
mkdir -p docs/catalog
mkdir -p docs/configuration
mkdir -p docs/reference
mkdir -p docs/releases

# Function to safely move a file (only if source exists and dest doesn't)
safe_move() {
  local source=$1
  local dest=$2
  if [ -f "$source" ]; then
    if [ ! -f "$dest" ]; then
      echo "📁 Moving $source → $dest"
      mv "$source" "$dest"
    else
      echo "⏭️  Skipping $source (already at destination)"
    fi
  else
    echo "⏭️  Skipping $source (already moved or doesn't exist)"
  fi
}

# Move documentation files
safe_move "README.md" "docs/getting-started/README.md"
safe_move "ADD_AGENT_TEMPLATE.md" "docs/guides/ADD_AGENT_TEMPLATE.md"
safe_move "AGENTS_SUPPLEMENT.md" "docs/guides/AGENT_DISCOVERY.md"
safe_move "AGENTS_CATALOG.md" "docs/catalog/AGENTS_CATALOG.md"
safe_move "VERSION.json" "docs/configuration/VERSION.json"
safe_move "MANIFEST.md" "docs/configuration/MANIFEST.md"
safe_move "MARKETPLACE.md" "docs/reference/MARKETPLACE.md"
safe_move "marketplace-registry.json" "docs/reference/marketplace-registry.json"
safe_move "marketplace.json" "docs/reference/marketplace.json"
safe_move "ORGANIZATION_SCAN_REPORT.md" "docs/reference/ORGANIZATION_SCAN_REPORT.md"
safe_move "agents-manifest.json" "docs/reference/agents-manifest.json"
safe_move "RELEASE_v1.0.1.md" "docs/releases/RELEASE_v1.0.1.md"

echo "✅ Documentation reorganization complete (idempotent)!"
