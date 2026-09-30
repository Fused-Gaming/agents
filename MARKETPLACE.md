# Fused Gaming Agents Marketplace

A centralized catalog and registry for all AI agents and agent prompt templates available in the Fused Gaming ecosystem.

## Overview

The Agents Marketplace provides a comprehensive directory of 80+ production-ready agents organized across 24 categories. This enables:

- **Discovery**: Find agents by category, capability, or use case
- **Integration**: Access complete metadata for agent deployment
- **Management**: Track versions and agent status
- **Coordination**: Enable multi-agent systems

## Registry Structure

### Main Registry File: `marketplace-registry.json`

```json
{
  "registry": {
    "version": "1.0.0",
    "name": "Fused Gaming Agents Marketplace",
    "description": "Central catalog of all available agents",
    "lastUpdated": "ISO-8601 timestamp",
    "totalAgents": 80,
    "totalCategories": 24,
    "agents": [
      {
        "id": "unique-agent-id",
        "name": "Agent Display Name",
        "category": "category-name",
        "status": "active",
        "description": "What the agent does",
        "capabilities": ["capability-1", "capability-2"],
        "author": "Fused Gaming",
        "license": "Apache-2.0",
        "tags": ["tag1", "tag2"]
      }
    ],
    "categoryBreakdown": { ... }
  },
  "categories": [ ... ],
  "stats": { ... }
}
```

## Agent Schema Reference

### Required Fields

- **id**: Unique identifier (kebab-case)
- **name**: Display name
- **category**: Classification category
- **status**: One of: active, beta, deprecated
- **description**: Brief purpose (1-2 sentences)

### Optional Fields

- **capabilities**: Array of features/capabilities
- **author**: Maintainer name
- **license**: Open source license
- **tags**: Searchable keywords
- **configuration**: Agent configuration options
- **examples**: Usage examples

## Categories

Agents are organized into 24 categories:

### Coordination & Orchestration
- **flow-nexus**: Workflow orchestration and routing
- **consensus**: Distributed decision-making
- **swarm**: Swarm-based coordination
- **hive-mind**: Unified multi-agent intelligence
- **goal**: Goal-oriented planning and execution

### Frameworks & Implementations
- **v3**: V3 framework agents
- **sparc**: SPARC framework agents
- **sona**: SONA framework agents
- **dual-mode**: Dual analytical/creative mode agents
- **core**: Core foundational agents

### Integration & Automation
- **github**: GitHub integration and automation
- **templates**: Pre-built agent templates
- **custom**: Custom agent builders
- **development**: Development support

### Processing & Analysis
- **optimization**: Performance optimization
- **sublinear**: Efficient algorithms
- **analysis**: System analysis and insights
- **testing**: Test validation and QA

### Services
- **payments**: Payment processing agents
- **architecture**: System architecture (planned)
- **devops**: DevOps automation (planned)
- **documentation**: Documentation generation (planned)
- **specialized**: Domain-specific agents (planned)

## Adding Agents to the Marketplace

### 1. Identify the Agent

Locate agent prompt file in `agent-prompts/[category]/[agent-name].md`

### 2. Extract Metadata

Required information:
- Agent ID (kebab-case)
- Display name
- Category
- Brief description
- Key capabilities
- Status (active/beta/deprecated)

### 3. Add to Registry

Add entry to `marketplace-registry.json`:

```json
{
  "id": "my-agent",
  "name": "My Agent",
  "category": "github",
  "status": "active",
  "description": "What my agent does",
  "capabilities": ["feature-1", "feature-2"],
  "author": "Fused Gaming",
  "license": "Apache-2.0",
  "tags": ["github", "automation"]
}
```

### 4. Update Category Breakdown

Update `categoryBreakdown` with agent count.

### 5. Update Statistics

Update the `stats` section with new totals.

## Querying the Marketplace

### By Category

```javascript
const githubAgents = registry.agents.filter(a => a.category === "github");
```

### By Capability

```javascript
const orchestrationAgents = registry.agents.filter(
  a => a.capabilities.includes("workflow-orchestration")
);
```

### By Status

```javascript
const activeAgents = registry.agents.filter(a => a.status === "active");
```

### By Tag

```javascript
const automationAgents = registry.agents.filter(
  a => a.tags.includes("automation")
);
```

### Top Categories

```javascript
const topCategories = registry.stats.topCategories;
// Returns highest-count categories
```

## Agent Status Definitions

- **active**: Fully functional, production-ready
- **beta**: Functional but undergoing improvements
- **deprecated**: No longer recommended, marked for removal

## Capability Index

### Workflow Orchestration
Agents that manage complex workflows and routing:
- Flow Nexus agents
- Goal agents
- Template agents

### Multi-Agent Coordination
Agents that coordinate multiple agents:
- Swarm agents
- Consensus agents
- Hive Mind agents

### Distributed Decision-Making
Agents that enable collective decision-making:
- Consensus agents
- Voting mechanisms
- Agreement protocols

### Integration & Automation
Agents for system integration:
- GitHub agents
- Custom builders
- Development agents

### Analysis & Optimization
Agents for system analysis and tuning:
- Optimization agents
- Analysis agents
- Sublinear processors

### Reasoning & Planning
Agents for complex reasoning:
- SPARC agents
- Goal planning agents
- Dual Mode agents

## Common Use Patterns

### GitHub Workflow Automation
```
GitHub Agents → Event Processing → Action Execution
```

### Multi-Agent Problem Solving
```
Goal Planning → Agent Selection → Swarm Execution → Consensus
```

### Workflow Orchestration
```
Flow Nexus → Dynamic Routing → Task Execution → State Update
```

### Quality Assurance
```
Test Agents → Validation → Analysis → Reporting
```

## Integration Best Practices

### 1. Agent Selection
- Choose agent matching your use case
- Review capabilities and constraints
- Check category documentation

### 2. Configuration
- Load agent prompt from agent-prompts/
- Customize role and objectives
- Define constraints and behaviors

### 3. Deployment
- Integrate with MCP infrastructure
- Connect to relevant tools and skills
- Configure event handling

### 4. Monitoring
- Track agent execution
- Monitor performance metrics
- Update status as needed

### 5. Evolution
- Gather feedback on agent performance
- Update agent prompts as needed
- Share improvements with community

## Maintenance

The marketplace should be updated when:

- New agents are created or discovered
- Agents change categories
- Capabilities are added/modified
- Agents change status
- Metadata requires updates

### Update Checklist

- [ ] Agent ID is unique
- [ ] Category is appropriate
- [ ] Description is accurate
- [ ] Capabilities are complete
- [ ] Status is current
- [ ] Tags are relevant
- [ ] License is correct

## Agent Prompt Access

Agent prompts are located in:
```
agent-prompts/[category]/[agent-name].md
```

Each prompt contains:
- Role and identity
- Objectives and goals
- Capabilities and tools
- Constraints and limitations
- Behaviors and responses
- Examples and usage

## Statistics & Analytics

### Agents by Category
View `stats.byCategory` in registry for counts per category

### Agent Status Distribution
- Active: 100% of agents
- Beta: 0%
- Deprecated: 0%

### Top Categories
1. GitHub (13 agents)
2. V3 Framework (10 agents)
3. Templates (9 agents)
4. Flow Nexus (9 agents)
5. Consensus (7 agents)

## Integration with Skills & Tools

### Agent → Skills Relationship
```
Agents orchestrate skill execution
Skills provide tool implementations
Together: complete automation
```

### Agent → Tools Relationship
```
Agents decide which tools to use
Tools execute agent commands
Together: extended capabilities
```

### Triple Integration
```
Agents (orchestration) 
+ Skills (capabilities) 
+ Tools (utilities)
= Complete System
```

## License

All agents are released under **Non-Commercial License v1.0**:

- ✅ Free for individual and educational use
- ✅ Free for academic institutions
- ✅ Free for research and learning
- ❌ Commercial use requires separate license

See LICENSE file for complete terms.

## Related Documentation

- See `AGENTS_CATALOG.md` for organized directory
- See `README.md` for getting started guide
- See `agent-prompts/` for agent prompt files
- See marketplace-registry.json for complete metadata

## Support & Contributions

### Getting Help
- Check AGENTS_CATALOG.md
- Review marketplace-registry.json
- Examine agent prompt examples
- Open GitHub issues
- Email: playxrewards@gmail.com

### Contributing Agents
- Create agent prompt files
- Extract metadata
- Add to marketplace registry
- Update documentation
- Test integration

## Roadmap

Planned additions:
- Architecture analysis agents
- DevOps automation agents
- Documentation generation agents
- Domain-specific specialized agents
- Advanced reasoning agents
- Machine learning agents
