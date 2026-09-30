# Environment Configuration

Configuration and setup instructions for the Agents Marketplace.

## Node.js Requirements

- **Node.js**: >=14.0.0
- **npm**: >=6.0.0

## Environment Variables

No environment variables are required for basic usage.

### Optional Configuration

For development and advanced use cases:

```bash
# Enable debug logging
DEBUG=agents:*

# Set custom marketplace data source
AGENTS_REGISTRY=./docs/reference/marketplace-registry.json

# Set custom manifest location
AGENTS_MANIFEST=./docs/reference/agents-manifest.json
```

## Setup Instructions

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/Fused-Gaming/agents.git
cd agents

# Install dependencies
npm install
```

### 2. Verify Installation

```bash
# Check version
npm run version:check

# List available agents
npm run agents:list

# View statistics
npm run agents:by-category
```

### 3. Configuration Files

Key configuration files are located in `docs/configuration/`:

- **VERSION.json** - Versioning and release information
- **MANIFEST.md** - Rock-hardening certification

## Marketplace Registry

The marketplace registry contains metadata for all agents:

- **Location**: `docs/reference/marketplace-registry.json`
- **Format**: JSON
- **Size**: ~3,800 lines
- **Updated**: With each marketplace generation

## Agent Prompts

All agent prompt templates are located in `agent-prompts/` organized by category:

```
agent-prompts/
├── analysis/
├── architecture/
├── consensus/
├── core/
├── custom/
├── data/
├── development/
├── devops/
├── documentation/
├── dual-mode/
├── flow-nexus/
├── github/
├── goal/
├── hive-mind/
├── legal/
├── optimization/
├── payments/
├── sona/
├── sparc/
├── specialized/
├── sublinear/
├── swarm/
├── templates/
├── testing/
└── v3/
```

## Version Control

Version control headers are automatically managed in all agent files:

```html
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: example
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-example
-->
```

To update version headers:

```bash
npm run agents:version-control
```

## Documentation Structure

See [Getting Started](../getting-started/README.md) for complete documentation.

```
docs/
├── getting-started/     - Getting started guides
├── guides/              - Integration and discovery
├── catalog/             - Agent catalog
├── configuration/       - Configuration files
├── reference/           - Reference documentation
└── releases/            - Release notes
```

## Troubleshooting

### "Module not found" errors

Ensure dependencies are installed:
```bash
npm install
```

### Version mismatch warnings

Update to the latest version:
```bash
npm run agents:version-control
```

### Manifest verification

Verify the agents manifest:
```bash
npm run agents:verify
```

## Support

For issues and questions:
- **Repository**: https://github.com/Fused-Gaming/agents
- **Issues**: https://github.com/Fused-Gaming/agents/issues
- **Email**: license@vln.gg

---

Last Updated: 2026-09-30
