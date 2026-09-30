# Agent Creation and Integration Guide

Comprehensive guide for creating, integrating, and managing agents in the Fused Gaming Agents Marketplace.

## Table of Contents

1. [Agent Fundamentals](#agent-fundamentals)
2. [Agent Structure](#agent-structure)
3. [Creating New Agents](#creating-new-agents)
4. [Agent Categories](#agent-categories)
5. [Best Practices](#best-practices)
6. [Integration Guide](#integration-guide)
7. [Version Control](#version-control)
8. [Testing Agents](#testing-agents)

---

## Agent Fundamentals

### What is an Agent?

An agent is a reusable Claude prompt template configured for a specific domain or task. Each agent:

- Has a clear, focused purpose
- Is version controlled and tracked
- Includes metadata and documentation
- Follows marketplace standards
- Is organized in a category

### Agent Characteristics

**Scope**: Specialized for specific use case  
**Reusability**: Can be used across projects  
**Documentation**: Clear instructions and examples  
**Version Control**: Tracked with integrity checks  
**Licensing**: Non-Commercial v1.0  
**Status**: Active, beta, or deprecated

### Agent Lifecycle

```
Draft → Created → Version Controlled → Catalog → Used → Maintained → [Deprecated]
```

---

## Agent Structure

### File Organization

```
agent-prompts/
└── {category}/
    └── {agent-name}.md
```

**Examples**:
- `agent-prompts/github/pr-manager.md`
- `agent-prompts/legal/case-architect.md`
- `agent-prompts/consensus/raft-manager.md`

### File Format

Each agent file has three sections:

#### 1. Version Control Header (HTML Comment)

```html
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: github
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-pr-manager
-->
```

**Fields**:
- **Version**: Semantic version matching marketplace
- **Last Updated**: ISO 8601 date
- **Category**: Folder name (matches directory)
- **Status**: active, beta, or deprecated
- **License**: Always Non-Commercial v1.0
- **Repository**: Fused-Gaming/agents
- **Integrity**: SHA256 hash for file verification

#### 2. Frontmatter (YAML)

```yaml
---
name: pr-manager
description: Manages pull request workflows, reviews, and automation
category: github
status: active
framework: claude
tags:
  - github
  - pr
  - automation
  - workflow
author: Fused Gaming
version: 1.0.2
capabilities:
  - pr-review
  - automation
  - workflow-management
---
```

**Fields**:
- **name**: kebab-case identifier
- **description**: 1-2 sentence purpose
- **category**: Folder category
- **status**: active, beta, deprecated
- **framework**: claude (or other)
- **tags**: Searchable keywords
- **author**: Creator/maintainer
- **version**: Current version
- **capabilities**: Key features/abilities

#### 3. Agent Content (Markdown)

The actual agent prompt and instructions:

```markdown
## Overview
[Agent purpose and context]

## Capabilities
[What this agent can do]

## Constraints
[Limitations and restrictions]

## Usage Example
```
[Example usage with input/output]
```

## Integration Points
[How to use with other agents]

## Configuration
[Any agent-specific settings]
```

### Complete Example

```markdown
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: github
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-pr-manager
-->

---
name: pr-manager
description: Manages pull request workflows, reviews, and automation
category: github
status: active
framework: claude
tags:
  - github
  - pr
  - automation
capabilities:
  - pr-review
  - automation
author: Fused Gaming
version: 1.0.2
---

You are the PR Manager agent. Your role is to streamline pull request workflows and ensure code quality standards are maintained.

## Capabilities

- Review pull request changes
- Suggest improvements
- Manage PR workflow state
- Coordinate with other agents
- Enforce quality gates

## Constraints

- Never merge PRs without review
- Never modify code without approval
- Always maintain test coverage
- Must verify CI/CD passes

## Integration

Works with:
- Code Review agent
- Testing agent
- Release Manager agent

## Usage

Input PR details and receive:
- Change analysis
- Improvement suggestions
- Workflow recommendations
```

---

## Creating New Agents

### Step-by-Step Process

#### 1. Determine Category

Choose the most appropriate category:

```
analysis/          - Analysis and insights
architecture/      - System architecture
consensus/         - Multi-agent coordination
core/              - Foundational agents
custom/            - Custom builders
data/              - Data processing
development/       - Development support
devops/            - DevOps automation
documentation/     - Documentation generation
dual-mode/         - Analytical + creative
flow-nexus/        - Workflow orchestration
github/            - GitHub integration
goal/              - Goal-oriented planning
hive-mind/         - Unified intelligence
legal/             - Legal services
optimization/      - Performance optimization
payments/          - Payment processing
sona/              - SONA framework
sparc/             - SPARC framework
specialized/       - Specialized domains
sublinear/         - Efficient algorithms
swarm/             - Swarm coordination
templates/         - Pre-built templates
testing/           - Testing & QA
v3/                - V3 framework
```

If no category fits, discuss with team before creating new one.

#### 2. Create Agent File

Create file: `agent-prompts/{category}/{agent-name}.md`

```bash
# Example
touch agent-prompts/github/new-agent.md
```

#### 3. Add Version Header

Start with version control header:

```html
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: github
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-new-agent
-->
```

#### 4. Add Frontmatter

Include YAML frontmatter with metadata:

```yaml
---
name: new-agent
description: Clear description of agent purpose
category: github
status: active
framework: claude
tags:
  - tag1
  - tag2
author: Your Name
version: 1.0.2
capabilities:
  - capability1
  - capability2
---
```

#### 5. Write Agent Content

Create the actual agent prompt:

```markdown
You are the [Agent Name] agent. Your role is to [primary purpose].

## Overview
[Detailed context and background]

## Capabilities
- [Capability 1]
- [Capability 2]
- [Capability 3]

## Constraints
- [Never do this]
- [Always maintain this]
- [Consider this limitation]

## Integration
Works with: [other agents]

## Usage Example
[Input]
> Request description

[Output]
> Expected response

## Configuration
[Any specific settings or options]
```

#### 6. Run Version Control Script

After creating agent file:

```bash
npm run agents:version-control
```

This will:
- Verify version headers
- Update agents-manifest.json
- Sync package.json
- Generate registry

#### 7. Verify Addition

Verify agent appears in marketplace:

```bash
npm run agents:list | grep "agent-name"
npm run agents:manifest | jq '.agents.{category}[] | select(.id == "agent-name")'
```

#### 8. Commit Agent

Commit with clear message:

```bash
git add agent-prompts/{category}/{agent-name}.md
git commit -m "Add {category} agent: {agent-name}

Brief description of what agent does.

- Capabilities: [list]
- Integration: [related agents]
- Status: active
- Version: 1.0.2"
```

---

## Agent Categories

### Category Descriptions

**Analysis** (2 agents)
- Code quality analysis
- System analysis and insights

**Architecture** (1 agent)
- System design and architecture planning

**Consensus** (7 agents)
- Multi-agent voting and consensus
- Distributed decision making

**Core** (5 agents)
- Foundational agents: coder, planner, researcher, reviewer, tester

**Custom** (1 agent)
- Custom agent builders

**Data** (1 agent)
- Data processing and ML

**Development** (2 agents)
- Backend and API development

**DevOps** (1 agent)
- CI/CD and infrastructure automation

**Documentation** (1 agent)
- API documentation generation

**Dual-Mode** (3 agents)
- Analytical + creative processing modes

**Flow Nexus** (9 agents)
- Workflow orchestration and routing

**GitHub** (13 agents)
- GitHub integration and automation

**Goal** (3 agents)
- Goal-oriented planning and execution

**Hive Mind** (5 agents)
- Unified multi-agent intelligence

**Legal** (9 agents)
- Legal services and case management

**Optimization** (5 agents)
- Performance tuning and resource optimization

**Payments** (1 agent)
- Payment processing automation

**SONA** (1 agent)
- SONA framework implementation

**SPARC** (4 agents)
- SPARC framework agents

**Specialized** (1 agent)
- Domain-specific specialized agents

**Sublinear** (5 agents)
- Efficient algorithms with sublinear complexity

**Swarm** (5 agents)
- Swarm-based coordination and collaboration

**Templates** (9 agents)
- Pre-built templates for rapid deployment

**Testing** (4 agents)
- Test validation and QA

**V3** (10 agents)
- V3 framework implementation

---

## Best Practices

### Agent Design

**Do**:
- ✅ Focus on single primary purpose
- ✅ Document all capabilities clearly
- ✅ Include practical examples
- ✅ Define constraints explicitly
- ✅ Specify integration points
- ✅ Keep prompt concise and clear
- ✅ Use consistent formatting

**Don't**:
- ❌ Try to do everything in one agent
- ❌ Assume context from other agents
- ❌ Skip constraint documentation
- ❌ Leave examples unclear
- ❌ Create ambiguous behavior
- ❌ Use excessive length
- ❌ Ignore version control

### Naming Conventions

**Agent Files**: kebab-case
```
agent-name.md           ✅ Correct
agentName.md            ❌ Wrong
Agent Name.md           ❌ Wrong
agent_name.md           ❌ Wrong
```

**Agent IDs**: kebab-case matching filename
```
name: agent-name        ✅ Correct
```

**Categories**: lowercase, no spaces
```
agent-prompts/github/   ✅ Correct
agent-prompts/GitHub/   ❌ Wrong
```

### Documentation Standards

**Descriptions**: 1-2 sentences, clear and concise
```
✅ "Manages pull request workflows and automates code reviews"
❌ "An agent that can do various things with PRs"
```

**Capabilities**: Bulleted list of key abilities
```yaml
capabilities:
  - pull-request-review
  - workflow-automation
  - quality-gates
```

**Constraints**: Explicit limitations and rules
```
- Never merge without review
- Always maintain test coverage
- Must verify CI passes
```

### Integration

**Cross-Agent Communication**:
```
## Integration
Works with:
- Code Review agent (for detailed analysis)
- Testing agent (for coverage verification)
- Release Manager agent (for deployment)
```

**Avoiding Conflicts**:
- Specify which agent does what
- Define clear hand-off points
- Document expected outputs
- List mutual dependencies

---

## Integration Guide

### Using Agents from This Repository

#### 1. Direct Import

Copy agent content into your prompt:

```markdown
[Copy entire agent content]

Now, acting as this agent, please [task].
```

#### 2. Reference by Name

If using an agent framework:

```markdown
Use the GitHub PR Manager agent from Fused Gaming Agents:
agent-prompts/github/pr-manager.md

Please review this PR for quality issues.
```

#### 3. Programmatic Access

Access via marketplace registry:

```javascript
const registry = require('./docs/reference/marketplace-registry.json');
const agent = registry.agents.find(a => a.id === 'pr-manager');
```

### Combining Multiple Agents

**Workflow Pattern**:

```markdown
1. Use [Agent A] to [task 1]
2. Pass output to [Agent B] for [task 2]
3. Combine results with [Agent C] for [task 3]

[Provide specific inputs for each step]
```

**Example**:

```markdown
1. Use the Code Analyzer agent to review code quality
2. Pass issues to the Fix Generator agent for fixes
3. Use the Test Validator agent to verify fixes work
```

### Agent Versioning

Always check version compatibility:

```bash
npm run version:check

# Agents v1.0.2 ready
```

When upgrading agents:
1. Review CHANGELOG.md for breaking changes
2. Test with new agent version
3. Update references if needed
4. Document version requirement

---

## Version Control

### Version Headers

Every agent has a version control header:

```html
<!-- Agent Version Control
- Version: 1.0.2
- Last Updated: 2026-09-30
- Category: github
- Status: active
- License: Non-Commercial v1.0
- Repository: Fused-Gaming/agents
- Integrity: sha256-AGENT-agent-name
-->
```

### Updating Agents

When modifying an agent:

```bash
# 1. Edit agent file
# 2. Update header (version, date, status)
# 3. Run version control script
npm run agents:version-control

# 4. Verify
npm run agents:verify

# 5. Commit
git commit -m "Update github agent: pr-manager

- Improved review logic
- Added new capability
- Fixed edge case handling

Version: 1.0.2
Updated: 2026-09-30"
```

### Status Values

- **active**: Production-ready agent
- **beta**: Under development/testing
- **deprecated**: No longer recommended

### Integrity Checksums

Checksums verify agent file integrity:

```
sha256-AGENT-agent-name
```

Automatically generated and verified by:
```bash
npm run agents:verify
```

---

## Testing Agents

### Before Committing

#### 1. Format Verification

```bash
# Verify markdown syntax
npm run agents:verify

# Check JSON validity
jq empty docs/reference/agents-manifest.json
```

#### 2. Content Testing

- [ ] Agent description is clear
- [ ] Capabilities listed completely
- [ ] Constraints documented
- [ ] Examples are accurate
- [ ] Integration points identified
- [ ] No broken cross-references

#### 3. Version Verification

```bash
# Check version consistency
npm run version:check

# Verify in manifest
npm run agents:manifest | jq '.agents.{category}[] | select(.id == "agent-name")'
```

#### 4. Practical Testing

- [ ] Use agent prompt in practice
- [ ] Test edge cases
- [ ] Verify integration with other agents
- [ ] Document any issues found
- [ ] Fix before committing

### Common Test Scenarios

**Single Agent Usage**
```
Input: [Use case description]
Expected: [What agent should do]
Verify: Agent produces expected output
```

**Multi-Agent Integration**
```
Agent A → [output] → Agent B → [output] → Agent C
Verify: Each hand-off works correctly
```

**Constraint Testing**
```
Verify: Agent respects all documented constraints
```

---

## Troubleshooting

### Agent Not Appearing in Lists

```bash
# 1. Check file location
ls agent-prompts/{category}/{agent-name}.md

# 2. Run version control
npm run agents:version-control

# 3. Verify in manifest
npm run agents:manifest | grep {agent-name}

# 4. Check marketplace registry
jq '.agents[] | select(.id == "{agent-name}")' docs/reference/marketplace-registry.json
```

### Version Mismatch

```bash
# Regenerate version headers
npm run agents:version-control

# Verify consistency
npm run agents:verify
```

### Formatting Issues

```bash
# Validate YAML frontmatter
# Ensure proper indentation and quotes

# Validate JSON files
jq empty docs/reference/*.json

# Check markdown syntax
# Use markdown linter if available
```

---

## Resources

### Documentation
- **SKILL.md** - Skill and workflow guide
- **CLAUDE.md** - Claude Code configuration
- **docs/getting-started/** - User guide
- **docs/guides/** - Integration guides

### Commands
```bash
npm run agents:list              # List all agents
npm run agents:by-category       # Group by category
npm run agents:search "keyword"  # Search agents
npm run agents:version-control   # Update versions
npm run agents:verify            # Verify manifest
npm run agents:manifest          # View manifest
```

### Support
- **Repository**: https://github.com/Fused-Gaming/agents
- **Issues**: https://github.com/Fused-Gaming/agents/issues
- **Email**: license@vln.gg

---

**Last Updated**: 2026-09-30  
**Version**: 1.0.2  
**Repository**: Fused-Gaming/agents
