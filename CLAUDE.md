# Claude Code Configuration for Agents Repository

This document provides Claude Code specific configuration and guidance for the Fused Gaming Agents Marketplace repository.

## Repository Information

- **Repository**: Fused-Gaming/agents
- **Type**: Agent marketplace and templates
- **Language**: Markdown (agents), JavaScript (scripts), JSON (config)
- **Current Version**: 1.0.2
- **License**: Non-Commercial v1.0

## Project Structure for Claude

### Key Directories

```
agents/
├── agent-prompts/     → Primary work directory (agent templates)
├── docs/              → Documentation (organized in v1.0.2+)
├── scripts/           → Utility scripts (JavaScript/Node)
└── src/               → (Future) Source code directory
```

### Important Files

**Configuration & Metadata**
- `package.json` - Node.js config, scripts, dependencies
- `docs/configuration/VERSION.json` - Version tracking
- `docs/configuration/MANIFEST.md` - Rock-hardening cert
- `docs/reference/agents-manifest.json` - Agent tracking

**Documentation**
- `README.md` - Entry point (minimal)
- `CHANGELOG.md` - Version history
- `SKILL.md` - Skill/workflow guide
- `AGENTS.md` - Agent-specific guide

**Source**
- `agent-prompts/` - All agent templates
- `scripts/` - Automation scripts

## Working with Claude Code

### Session Hooks

Add these to your Claude Code `.claude/settings.json`:

```json
{
  "hooks": {
    "onSessionStart": "npm run version:check && echo 'Agents v1.0.2 ready'",
    "beforeSave": "npm run agents:verify || echo 'Run: npm run agents:version-control'",
    "afterCommit": "echo 'Commit verified - agent manifest synced'"
  }
}
```

### Recommended Permissions

Allow these commands without prompting:

```json
{
  "permissions": {
    "allowlist": [
      "npm run agents:*",
      "npm run marketplace:*",
      "npm run docs:*",
      "npm run version:*"
    ],
    "workspace": true
  }
}
```

### Environment Variables (Optional)

```bash
# Enable verbose logging
DEBUG=agents:*

# Custom paths (if reorganized)
AGENTS_REGISTRY=./docs/reference/marketplace-registry.json
AGENTS_MANIFEST=./docs/reference/agents-manifest.json
```

## Common Claude Workflows

### 1. Adding or Updating Agents

**Workflow**:
1. Navigate to `agent-prompts/{category}/`
2. Create/edit `{agent-name}.md`
3. Follow agent file format (see AGENTS.md)
4. Run: `npm run agents:version-control`
5. Verify: `npm run agents:verify`
6. Commit with agent details

**Claude Commands**:
```bash
npm run agents:version-control  # Update headers
npm run agents:verify           # Verify changes
npm run agents:manifest         # View manifest
```

### 2. Documentation Updates

**Workflow**:
1. Edit files in `docs/` directory
2. Update version dates in headers
3. Run version control if adding new docs
4. Commit documentation changes

**Structure**:
- `docs/getting-started/` - User guides
- `docs/guides/` - Integration guides
- `docs/catalog/` - Agent listings
- `docs/configuration/` - Config files
- `docs/reference/` - Reference docs
- `docs/releases/` - Release notes

### 3. Version Management

**Workflow**:
1. Update version in `docs/configuration/VERSION.json`
2. Update `package.json` version
3. Update `CHANGELOG.md` with changes
4. Run: `npm run agents:version-control`
5. Commit with version details

**Version Format**: Semantic versioning (MAJOR.MINOR.PATCH)
- 1.0.2 = Version 1, Minor version 0, Patch version 2

### 4. Repository Reorganization

**Workflow** (as done in v1.0.2):
1. Create feature branch: `claude/documentation-structure-reorganization`
2. Reorganize files as needed
3. Update all paths in package.json
4. Run version scripts
5. Commit reorganization
6. Create PR and merge

## File Editing Guidelines

### Agent Files (agent-prompts/*.md)

**Do**:
- ✅ Keep version header at top
- ✅ Use markdown formatting
- ✅ Add clear descriptions
- ✅ Document capabilities
- ✅ Include usage examples

**Don't**:
- ❌ Remove version headers
- ❌ Change file names without updating registry
- ❌ Break category organization
- ❌ Edit without running version-control

### Configuration Files

**Do**:
- ✅ Keep JSON valid and pretty-printed
- ✅ Update timestamps when modifying
- ✅ Maintain file structure
- ✅ Document changes in commit

**Don't**:
- ❌ Manually edit version numbers
- ❌ Break JSON formatting
- ❌ Remove required fields
- ❌ Commit without validation

### Documentation Files

**Do**:
- ✅ Use clear markdown formatting
- ✅ Keep links working
- ✅ Update dates when modified
- ✅ Reference other docs correctly

**Don't**:
- ❌ Use absolute paths
- ❌ Break internal links
- ❌ Remove table of contents
- ❌ Edit frontmatter

## Code Review Checklist

When reviewing changes:

### Agent Files
- [ ] Version header present and current
- [ ] File in correct category
- [ ] Frontmatter valid YAML
- [ ] Markdown syntax correct
- [ ] No broken links

### Configuration Files
- [ ] JSON valid and parseable
- [ ] Paths updated to docs/
- [ ] Version numbers consistent
- [ ] Integrity checksums valid
- [ ] Timestamps current

### Documentation
- [ ] Links work correctly
- [ ] Formatting consistent
- [ ] No typos or grammar errors
- [ ] Examples accurate
- [ ] Cross-references valid

### Commits
- [ ] Clear commit message
- [ ] Related files grouped
- [ ] No unrelated changes
- [ ] References issues/PRs
- [ ] Follows atom principle

## Testing & Verification

### Quick Verification
```bash
# Check version consistency
npm run version:check

# Verify agent manifest
npm run agents:verify

# List agents to spot check
npm run agents:list | head -20
```

### Comprehensive Verification
```bash
# Generate fresh registry
npm run marketplace:generate

# View full manifest
npm run agents:manifest | jq '.stats'

# Search for specific agent
npm run agents:search "example"
```

### JSON Validation
```bash
# Validate registry JSON
jq empty docs/reference/marketplace-registry.json

# Validate manifest JSON
jq empty docs/reference/agents-manifest.json

# Validate version JSON
jq empty docs/configuration/VERSION.json
```

## Integration with Tools & Skills

The agents repository depends on:
- **Fused-Gaming/tools** (v1.0.0+)
- **Fused-Gaming/skills** (v1.0.0+)

When making changes:
- Keep version numbers aligned
- Test cross-repository references
- Update dependency notes if changed
- Coordinate major version changes

## Performance Considerations

### Large File Operations
- Agent directory: 109 files (~500KB)
- Registry: ~4MB JSON file
- Manifest: ~1MB JSON file

**Optimization**:
- Run version-control during off-peak times
- Batch agent updates together
- Keep marketplace cache fresh
- Monitor file sizes

### Script Performance

**add-version-control.js**:
- Processes all 109 files
- Generates manifest (~30 seconds)
- Typical run time: <1 minute

**generate-marketplace.js**:
- Scans all agents
- Creates registry JSON
- Typical run time: <30 seconds

## Troubleshooting

### Version Mismatch
**Problem**: Version in VERSION.json ≠ package.json  
**Solution**:
```bash
npm run agents:version-control
# Edit both files to match
```

### Manifest Outdated
**Problem**: Agents added but not in manifest  
**Solution**:
```bash
npm run agents:version-control
npm run agents:verify
```

### Path Errors
**Problem**: "File not found" in docs/  
**Solution**: Verify you're using paths relative to repo root
```bash
# Correct: docs/reference/marketplace.json
# Wrong: ./reference/marketplace.json
```

### Encoding Issues
**Problem**: Special characters display incorrectly  
**Solution**: Ensure files are UTF-8 encoded
```bash
file agent-prompts/*/*.md  # Check encoding
```

## Best Practices for Claude

### Working with Agents
1. Always run `npm run agents:version-control` after changes
2. Verify with `npm run agents:verify`
3. Use atomic commits per agent
4. Test agent functionality before committing
5. Reference category in commit message

### Documentation
1. Keep docs in sync with agent changes
2. Update CHANGELOG.md for releases
3. Maintain version numbers consistently
4. Link between related documentation
5. Use clear, concise language

### Version Control
1. Commit frequently with clear messages
2. Use feature branches for major changes
3. Keep commits focused and atomic
4. Reference issues in commit messages
5. Include verification steps in commits

## Related Documents

- **SKILL.md** - Detailed skill and workflow guide
- **AGENTS.md** - Comprehensive agent creation guide
- **CHANGELOG.md** - Version history and releases
- **docs/getting-started/README.md** - User guide

## Support

- **Issues**: https://github.com/Fused-Gaming/agents/issues
- **Discussion**: https://github.com/Fused-Gaming/agents/discussions
- **Email**: license@vln.gg

---

**Last Updated**: 2026-09-30  
**Version**: 1.0.2  
**Repository**: Fused-Gaming/agents
