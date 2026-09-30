# Changelog

All notable changes to the Fused Gaming Agents Marketplace are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Enhanced agent search and filtering
- Agent performance benchmarking tools
- Integration templates for popular platforms

## [1.0.2] - 2026-09-30

### Added
- Documentation reorganization with new `docs/` directory structure
- `docs/getting-started/` - Getting started guides and quickstart
- `docs/guides/` - Integration and discovery guides
- `docs/catalog/` - Agent catalog and category information
- `docs/configuration/` - Configuration and versioning files
- `docs/reference/` - Reference documentation and specifications
- `docs/releases/` - Release notes and history
- Root-level CHANGELOG.md for version tracking
- New organization script for documentation structure

### Changed
- Root README.md now points to comprehensive documentation structure
- Documentation files organized into logical categories
- Improved discoverability of guides and reference materials
- Package.json updated with new documentation references

### Fixed
- Documentation organization for better maintainability

## [1.0.1] - 2026-09-30

### Added
- Version control headers to all 109 agent files
- `agents-manifest.json` for complete agent tracking
- 9 legal/case-management agents from case-canon:
  - Case Architect
  - Evidence Auditor
  - Filing QA
  - Form Specialist
  - Research Verifier
  - Order Safety Reviewer
  - Correspondence Reviewer
  - Civil Motion Specialist
  - Criminal Recovery Specialist
- Rock-hardened versioning with integrity checksums
- Automated version control maintenance via `add-version-control.js`
- npm scripts for manifest management and verification

### Changed
- Expanded from 80 to 89 total agents (+11.25% growth)
- Categories expanded from 24 to 25 (added Legal Services)
- Updated VERSION.json to v1.0.1 with verified status
- Updated MANIFEST.md with rock-hardening certification
- Package version synchronized to 1.0.1

### Fixed
- Consistency of version information across all agents
- License attribution for all agents

## [1.0.0] - 2026-09-30

### Added
- Initial release of Fused Gaming Agents Marketplace
- 80+ production-ready agents in 24 categories
- Complete marketplace registry (`marketplace-registry.json`)
- Agent catalog with metadata and specifications
- Rock-hardened deterministic version control
- Package configuration with reproducible builds
- Non-commercial license for free educational use
- Comprehensive marketplace documentation
- Agent discovery and integration infrastructure

### Features
- Full-featured agent discovery
- Category-based organization
- Capability-based search
- JSON-queryable registry
- Complete metadata tracking
- License verification
- Deterministic builds
- Reproducible deployments

---

## Version Numbering

- **Major**: Significant feature additions or breaking changes
- **Minor**: New agents, categories, or non-breaking enhancements
- **Patch**: Bug fixes, documentation updates, reorganizations

## Links

- [Repository](https://github.com/Fused-Gaming/agents)
- [Issues](https://github.com/Fused-Gaming/agents/issues)
- [Discussions](https://github.com/Fused-Gaming/agents/discussions)

## License

All changes are released under the Non-Commercial License v1.0.
Commercial use requires licensing from Fused Gaming.
