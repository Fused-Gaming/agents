# Fused Gaming Agents Repository

Central repository for all AI agents and agent prompt templates in the Fused Gaming ecosystem.

## Overview

This repository contains 80+ specialized AI agents organized across 24 categories, providing a comprehensive framework for multi-agent systems, workflow orchestration, and intelligent automation.

## Agent Categories

### Core Categories

**GitHub Integration (13 agents)**
- Repository management
- Issue tracking and automation
- Pull request handling
- Webhook management
- Workflow automation

**V3 Framework (10 agents)**
- V3 framework implementation
- Specification compliance
- Integration utilities
- Framework extensions

**Agent Templates (9 agents)**
- Pre-built agent blueprints
- Rapid deployment templates
- Customizable scaffolding
- Common use cases

**Flow Nexus (9 agents)**
- Workflow orchestration
- Intelligent flow routing
- State management
- Complex pipeline handling

**Consensus Algorithms (7 agents)**
- Multi-agent consensus
- Distributed decision-making
- Voting mechanisms
- Agreement protocols

### Multi-Agent Frameworks

**Swarm Intelligence (5 agents)**
- Swarm coordination
- Collective behavior
- Emergent intelligence
- Collaborative problem-solving

**Hive Mind (5 agents)**
- Unified intelligence systems
- Agent synthesis
- Knowledge sharing
- Collective reasoning

**Optimization (5 agents)**
- Performance optimization
- Resource allocation
- Load balancing
- Efficiency tuning

**Sublinear Processing (5 agents)**
- Efficient algorithms
- Sublinear complexity
- Scalable processing
- Performance optimization

**Core Agents (5 agents)**
- Foundational implementations
- Base functionality
- Extensible frameworks
- Common patterns

### Specialized Frameworks

**SPARC (4 agents)**
- Specialized Reasoning and Planning with SPARC
- Planning algorithms
- Reasoning engines
- Execution frameworks

**Goal Management (3 agents)**
- Goal-oriented planning
- Task hierarchies
- Milestone tracking
- Execution management

**Dual Mode (3 agents)**
- Analytical processing mode
- Creative processing mode
- Mode switching
- Flexible reasoning

**Testing (2 agents)**
- Test validation
- Quality assurance
- Coverage analysis
- Test generation

**Analysis (2 agents)**
- System analysis
- Pattern detection
- Insight generation
- Reporting

### Other Categories

- **SONA Framework** (1) - SONA implementation
- **Payment Processing** (1) - Transaction handling
- **Development Support** (1) - Coding assistance
- **Custom Builders** (1) - Agent creation tools
- **Architecture** (0) - Coming soon
- **DevOps** (0) - Coming soon
- **Documentation** (0) - Coming soon
- **Specialized** (0) - Custom domain agents

## Marketplace Registry

Complete agent metadata available in `marketplace-registry.json`:
- Agent names and IDs
- Category classification
- Capabilities and features
- Status (active/beta/deprecated)
- License information

### Quick Access

```json
// All agents
marketplace-registry.json

// Query by category
registry.agents.filter(a => a.category === "github")

// Search by capability
registry.agents.filter(a => a.capabilities.includes("workflow-orchestration"))
```

## Getting Started

### 1. Browse Available Agents

View `AGENTS_CATALOG.md` for organized directory by category.

### 2. Select an Agent

Choose an agent that matches your needs:
- GitHub integration agents for repo automation
- Swarm intelligence for multi-agent systems
- Templates for rapid deployment
- Flow Nexus for workflow orchestration

### 3. Load Agent Prompt

```bash
cat agent-prompts/[category]/[agent-name].md
```

### 4. Customize Configuration

Adapt the agent prompt to your specific requirements.

### 5. Deploy Agent

Integrate the configured agent into your system.

## Agent Structure

Each agent includes:
- **ID**: Unique identifier
- **Category**: Classification
- **Description**: Purpose and capabilities
- **Capabilities**: Feature list
- **Status**: Active/Beta/Deprecated
- **Configuration**: Customization options

## Statistics

- **Total Agents**: 80+
- **Active Agents**: 80
- **Categories**: 24
- **Top Category**: GitHub (13 agents)
- **License**: Non-Commercial (Free for education/individual use)

## License

**Fused Gaming Agents - Non-Commercial License v1.0**

- ✅ **Free for**: Individual use, education, research, academic institutions
- ❌ **Not free for**: Commercial use, revenue-generating services, business applications

### License Terms

This software is **free** for:
- Personal projects and experiments
- Educational purposes and learning
- Academic and research institutions
- Student projects and assignments
- Non-profit activities

**Commercial use requires a separate commercial license.** Contact playxrewards@gmail.com for commercial licensing.

See [LICENSE](./LICENSE) file for complete terms.

## Agent Prompt Structure

Each agent prompt file contains:
- **Role**: Agent's primary function
- **Objectives**: Core goals
- **Capabilities**: Available functions
- **Constraints**: Operating limitations
- **Behaviors**: Response patterns
- **Examples**: Usage demonstrations

## Related Repositories

- **Skills Marketplace**: https://github.com/Fused-Gaming/skills
- **Tools Marketplace**: https://github.com/Fused-Gaming/tools
- **Main MCP Repository**: https://github.com/Fused-Gaming/Fused-Gaming-Skill-MCP

## Integration Examples

### GitHub Agent Integration

```
Use agents from agent-prompts/github/ for:
- Automating repository tasks
- Managing issues and PRs
- Coordinating deployments
- Tracking project progress
```

### Multi-Agent Coordination

```
Use agents from:
- agent-prompts/swarm/ - Swarm-based coordination
- agent-prompts/consensus/ - Distributed decisions
- agent-prompts/hive-mind/ - Unified intelligence
```

### Workflow Orchestration

```
Use agents from:
- agent-prompts/flow-nexus/ - Complex workflows
- agent-prompts/goal/ - Goal-oriented execution
- agent-prompts/templates/ - Rapid deployment
```

## Contributing

Contributions welcome! Please ensure:
- Agent prompts are well-documented
- Capabilities are clearly defined
- Examples are provided
- License terms are retained

## Support

For questions or agent requests:
- Check AGENTS_CATALOG.md
- Review marketplace-registry.json
- Open GitHub issues
- Email: playxrewards@gmail.com

## Roadmap

Planned agent additions:
- Architecture analysis agents
- DevOps automation agents
- Documentation generation agents
- Domain-specific specialized agents
