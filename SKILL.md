# Agents Repository Skill Guide

This document provides guidance for Claude Code and agents working with the Fused Gaming Agents Marketplace repository.

## Repository Purpose

The Fused Gaming Agents Marketplace is a centralized, version-controlled repository of 89+ production-ready AI agents and prompt templates for the Claude ecosystem.

**Repository**: Fused-Gaming/agents  
**License**: Non-Commercial v1.0  
**Current Version**: 1.0.2  
**Total Agents**: 89 across 25 categories

## Quick Navigation

### Common Tasks

**Viewing Agent Information**
```bash
# List all agents with metadata
npm run agents:list

# Group agents by category  
npm run agents:by-category

# Search for specific agents
npm run agents:search "keyword"
```

**Documentation Access**
```bash
# View comprehensive getting started guide
npm run docs:view

# Check current version info
npm run version:check

# View agents manifest
npm run agents:manifest
```

**Development Operations**
```bash
# Update version control headers across all agents
npm run agents:version-control

# Verify agent manifest integrity
npm run agents:verify

# Generate marketplace registry
npm run marketplace:generate
```

## Repository Structure

```
agents/
├── README.md                    # Entry point
├── CHANGELOG.md                 # Version history
├── SKILL.md                     # This file
├── CLAUDE.md                    # Claude Code configuration
├── AGENTS.md                    # Agents-specific guide
├── package.json                 # Node.js configuration
├── LICENSE                      # Non-Commercial v1.0
│
├── agent-prompts/              # All 109 agent templates
│   ├── analysis/               # Analysis agents (2)
│   ├── architecture/           # Architecture agents (1)
│   ├── consensus/              # Consensus agents (7)
│   ├── core/                   # Core agents (5)
│   ├── custom/                 # Custom builders (1)
│   ├── data/                   # Data agents (1)
│   ├── development/            # Dev agents (2)
│   ├── devops/                 # DevOps agents (1)
│   ├── documentation/          # Documentation agents (1)
│   ├── dual-mode/              # Dual mode agents (3)
│   ├── flow-nexus/             # Flow orchestration (9)
│   ├── github/                 # GitHub integration (13)
│   ├── goal/                   # Goal-oriented agents (3)
│   ├── hive-mind/              # Unified intelligence (5)
│   ├── legal/                  # Legal services (9)
│   ├── optimization/           # Performance optimization (5)
│   ├── payments/               # Payment processing (1)
│   ├── sona/                   # SONA framework (1)
│   ├── sparc/                  # SPARC framework (4)
│   ├── specialized/            # Specialized agents (1)
│   ├── sublinear/              # Sublinear algorithms (5)
│   ├── swarm/                  # Swarm coordination (5)
│   ├── templates/              # Pre-built templates (9)
│   ├── testing/                # Testing & QA (4)
│   └── v3/                     # V3 framework (10)
│
├── docs/                        # Organized documentation
│   ├── getting-started/        # Getting started guide
│   ├── guides/                 # Integration guides
│   ├── catalog/                # Agent catalog
│   ├── configuration/          # Configuration files
│   ├── reference/              # Reference documentation
│   └── releases/               # Release notes
│
└── scripts/                     # Utility scripts
    ├── add-version-control.js  # Version header management
    ├── generate-marketplace.js # Registry generation
    ├── marketplace-cli.js      # Interactive browser
    └── reorganize-docs.sh      # Documentation org script
```

## Agent File Format

Each agent file is a markdown file with:

1. **Version Control Header** (HTML comment block)
```html
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: example
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-example-name
-->
```

2. **Frontmatter** (YAML)
```yaml
---
name: agent-name
description: Short description of what agent does
---
```

3. **Agent Content** (Markdown)
- System prompt and instructions
- Capabilities and constraints
- Integration examples
- Usage guidelines

## Version Control System

### Automated Version Headers
All agent files have version control headers managed by `add-version-control.js`:
- Version tracking per agent
- Last updated timestamps
- Integrity checksums
- License attribution

### Updating Version Headers
```bash
npm run agents:version-control
```

This script:
- Scans all agent-prompts/*.md files
- Adds/updates version headers
- Generates/updates agents-manifest.json
- Updates package.json metadata

### Manifest Tracking
`docs/reference/agents-manifest.json` contains:
- All 89 agents with metadata
- Version and status per agent
- Category organization
- Integrity verification data
- Last sync timestamp

## Workflow for Agent Changes

### Adding a New Agent
1. Create file: `agent-prompts/{category}/{agent-name}.md`
2. Add version header with version 1.0.2
3. Add agent content and frontmatter
4. Run: `npm run agents:version-control`
5. Verify: `npm run agents:verify`
6. Commit with agent details

### Updating an Existing Agent
1. Edit the agent file
2. Verify version header is current
3. Run: `npm run agents:version-control`
4. Commit with change description

### Removing an Agent
1. Delete the agent file
2. Run: `npm run agents:version-control`
3. Commit with removal reason

## Marketplace Registry

### Location
`docs/reference/marketplace-registry.json`

### Contents
- Complete agent metadata
- 89 agents with full details
- Integrity checksums
- Category breakdown
- Version information

### Regenerating
```bash
npm run marketplace:generate
```

## Dependencies

### Required
- Node.js >=14.0.0
- npm >=6.0.0

### Development
- jq (for JSON querying)

### Cross-Repository Dependencies
- Fused-Gaming/skills (v1.0.0+)
- Fused-Gaming/tools (v1.0.0+)

## Licensing

**Non-Commercial License v1.0**

### Permitted Uses
- ✅ Individual use
- ✅ Educational institutions
- ✅ Research and development
- ✅ Non-profit organizations

### Requires Commercial License
- ❌ Business/commercial use
- ❌ Profit-generating applications
- ❌ Resale or distribution

**Commercial Licensing**: license@vln.gg

## Best Practices

### Documentation
- Keep agent descriptions clear and concise
- Document all capabilities and constraints
- Include usage examples
- Maintain version headers current

### Organization
- Place agents in correct category
- Use consistent naming (kebab-case)
- Add metadata to frontmatter
- Update manifest after changes

### Version Control
- Commit frequently with clear messages
- Use descriptive branch names
- Keep commits atomic and focused
- Reference issues/PRs in commit messages

### Testing
- Verify agent works as documented
- Test category organization
- Run manifest verification
- Validate JSON files

## Common Issues

### "Manifest verification failed"
```bash
npm run agents:verify
npm run agents:version-control  # Regenerate if needed
```

### "Agent not appearing in lists"
1. Verify file is in correct category
2. Check frontmatter formatting
3. Run version-control script
4. Check marketplace-registry.json

### "Path not found" errors
- Ensure using paths relative to repository root
- Check docs/ reorganization (v1.0.2+)
- Verify marketplace paths updated

## Contributing

### Process
1. Create feature branch: `claude/feature-name`
2. Make changes
3. Update version headers: `npm run agents:version-control`
4. Verify: `npm run agents:verify`
5. Create PR with clear description
6. Address review feedback
7. Merge when approved

### Guidelines
- One feature per PR
- Clear commit messages
- Update documentation
- Maintain version consistency
- Keep agent files organized

## Support & Resources

- **Repository**: https://github.com/Fused-Gaming/agents
- **Issues**: https://github.com/Fused-Gaming/agents/issues
- **Docs**: See `docs/` directory
- **Email**: license@vln.gg

## Related Skills/Guides

- **CLAUDE.md** - Claude Code configuration for this repository
- **AGENTS.md** - Detailed agent creation and integration guide
- **docs/getting-started/** - Comprehensive getting started guide
- **docs/guides/** - Integration and discovery guides

---

**Last Updated**: 2026-09-30  
**Version**: 1.0.2  
**Repository**: Fused-Gaming/agents
