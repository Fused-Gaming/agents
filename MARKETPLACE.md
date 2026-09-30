# Agent Marketplace 🛍️

A comprehensive, scalable marketplace of 100+ specialized Claude agents organized into 25+ categories.

## Overview

The Agent Marketplace (`marketplace.json`) provides a unified, machine-readable registry of all available agents with rich metadata, searchability, and extensibility.

### Key Features

- ✅ **Complete Agent Catalog** - All 100+ agents with comprehensive metadata
- ✅ **25+ Categories** - Organized by domain and use case
- ✅ **Rich Metadata** - Description, capabilities, use cases, difficulty level
- ✅ **Discoverability** - Tags, search indexes, filtering support
- ✅ **Relational Data** - Related agents and dependencies
- ✅ **Scalable Schema** - Extensible for future features
- ✅ **Analytics Ready** - Statistics, ratings, usage tracking

---

## Marketplace Structure

### Root Level

```json
{
  "marketplace": {
    "version": "1.0.0",
    "lastUpdated": "2026-09-30T06:27:29.512Z",
    "totalAgents": 100,
    "metadata": { /* source and maintainer info */ }
  },
  "categories": { /* category definitions */ },
  "capabilities": [ /* available capabilities */ ],
  "agents": [ /* agent entries */ ],
  "search": { /* search configuration */ },
  "stats": { /* marketplace statistics */ }
}
```

### Categories

Each category contains:

```json
{
  "id": "core",
  "name": "Core Agents",
  "description": "Essential foundational agents...",
  "icon": "⚙️",
  "count": 5,
  "order": 1
}
```

**Available Categories:**

| Category | Icon | Count | Purpose |
|----------|------|-------|---------|
| Core | ⚙️ | 5 | Essential foundational agents |
| Development | 🛠️ | 5 | Backend & infrastructure |
| GitHub | 🐙 | 13 | CI/CD & repository workflows |
| Goal Planning | 🎯 | 3 | Complex objective planning |
| Flow Nexus | 🌊 | 9 | Platform-specific swarms |
| SPARC | ✨ | 4 | Methodology-based agents |
| Swarm | 🐝 | 5 | Multi-agent coordination |
| Hive Mind | 🧠 | 5 | Collective intelligence |
| Consensus | ⛓️ | 7 | Distributed systems |
| Optimization | ⚡ | 5 | Performance & tuning |
| Sublinear | 📊 | 5 | Advanced algorithms |
| Specialized | 🎓 | 3 | Domain-specific |
| Data & ML | 🔬 | 2 | Machine learning |
| Testing | ✅ | 4 | QA & validation |
| Documentation | 📚 | 2 | Technical writing |
| Architecture | 🏗️ | 2 | System design |
| Analysis | 🔍 | 2 | Code review |
| Dual-Mode | 🔄 | 3 | Flexible agents |
| Templates | 📋 | 9 | Reusable patterns |
| Custom | 🧪 | 2 | Experimental |
| V3 Integration | 🚀 | 10 | V3 specialists |
| Payments | 💳 | 1 | Financial operations |
| SONA | 📚 | 1 | Learning optimization |
| Neural | 🧠 | 1 | Neural networks |
| Reasoning | 🤔 | 2 | Advanced reasoning |

### Agent Entry

Each agent includes:

```json
{
  "id": "core-coder",
  "name": "Coder",
  "category": "core",
  "path": "core/coder.md",
  "type": "developer",
  "color": "#FF6B35",
  "description": "Implementation specialist for writing clean, efficient code",
  "capabilities": ["code_generation", "refactoring", "api_design"],
  "use_cases": [
    "Writing production-quality code",
    "API design and implementation",
    "Code optimization"
  ],
  "difficulty": "intermediate",
  "estimated_time": "variable",
  "tags": ["implementation", "quality", "best-practices"],
  "related_agents": ["core-reviewer", "core-tester"],
  "prerequisites": [],
  "integrations": [],
  "stats": {
    "views": 0,
    "uses": 0,
    "rating": 4.5
  },
  "version": "1.0.0",
  "lastUpdated": "2026-09-30"
}
```

### Field Reference

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| id | string | Unique identifier | ✅ |
| name | string | Display name | ✅ |
| category | string | Category ID | ✅ |
| path | string | Path to agent markdown file | ✅ |
| description | string | Brief description | ✅ |
| type | string | Agent type (developer, validator, coordinator, etc.) | ❌ |
| color | string | Color code for UI display | ❌ |
| capabilities | array | List of capabilities | ❌ |
| use_cases | array | List of use cases | ❌ |
| difficulty | string | beginner / intermediate / advanced | ❌ |
| estimated_time | string | Time estimate to use agent | ❌ |
| tags | array | Search/filter tags | ❌ |
| related_agents | array | IDs of related agents | ❌ |
| prerequisites | array | Required knowledge/setup | ❌ |
| integrations | array | External system integrations | ❌ |
| stats | object | Usage and rating statistics | ❌ |
| version | string | Agent version | ❌ |
| lastUpdated | string | Last update timestamp | ❌ |

---

## Capabilities

The marketplace defines 30+ standard capabilities:

- **Code Work**: code_generation, code_review, refactoring
- **Testing**: unit_testing, integration_testing, test_automation
- **Planning**: task_decomposition, planning, orchestration
- **Coordination**: coordination, swarm_coordination, distributed_systems
- **Optimization**: optimization, performance, scalability
- **Analysis**: code_analysis, analysis, investigation
- **Infrastructure**: ci_cd, deployment, monitoring, devops
- **Design**: api_design, system_design
- **Algorithms**: consensus_algorithms, goal_planning
- **Intelligence**: decision_making, learning, adaptation, natural_language_processing
- **Documentation**: documentation

---

## Searching & Filtering

### Search Indexes

The marketplace supports full-text search across:

- `name` - Agent name
- `description` - Agent description
- `category` - Category ID
- `tags` - Search tags
- `capabilities` - Listed capabilities
- `use_cases` - Use case descriptions

### Example Queries

```json
// Find all code review agents
{
  "search": "code review",
  "filter": { "category": "core" }
}

// Find advanced planning agents
{
  "filter": {
    "category": "goal",
    "difficulty": "advanced"
  }
}

// Find agents with specific capability
{
  "filter": {
    "capabilities": "swarm_coordination"
  }
}

// Find highly-rated agents
{
  "filter": {
    "rating": { "min": 4.5 }
  }
}
```

---

## Statistics

Current marketplace statistics:

```json
{
  "totalAgents": 100,
  "categoriesCount": 24,
  "capabilitiesCount": 30,
  "averageRating": 4.5,
  "lastUpdated": "2026-09-30T06:27:29.512Z"
}
```

---

## Generation & Maintenance

### Auto-Generating Marketplace

Use the included script to regenerate the marketplace from agent files:

```bash
node scripts/generate-marketplace.js
```

**What it does:**
1. Scans `agent-prompts/` directory recursively
2. Extracts YAML frontmatter from each agent file
3. Generates standardized entries with intelligent defaults
4. Writes complete `marketplace.json`
5. Maintains category mapping and statistics

### Agent File Format

Agents must have YAML frontmatter:

```markdown
---
name: coder
type: developer
color: "#FF6B35"
description: Implementation specialist for writing clean, efficient code
capabilities:
  - code_generation
  - refactoring
version: 1.0.0
---

# Agent content here
```

---

## Extensibility

### Adding New Fields

The schema is extensible. Add custom fields to agent entries:

```json
{
  "id": "custom-agent",
  // ... standard fields ...
  "custom_field": "value",
  "metadata": {
    "tier": "premium",
    "team": "platform"
  }
}
```

### Custom Capabilities

Add new capabilities to the global list:

```json
{
  "capabilities": [
    // ... existing ...
    "my_custom_capability"
  ]
}
```

### Custom Categories

Create new categories on demand:

```json
{
  "categories": {
    "my_category": {
      "id": "my_category",
      "name": "My Category",
      "icon": "🎨",
      "count": 0,
      "order": 100
    }
  }
}
```

---

## Roadmap

### v1.1.0 - Enhanced Discoverability
- Community ratings system
- User reviews and feedback
- Popular agents ranking
- Usage analytics dashboard

### v1.2.0 - Agent Composition
- Workflow definitions (YAML/JSON)
- Pre-built agent swarms
- Composition patterns
- Orchestration guides

### v2.0.0 - Web Marketplace
- Interactive marketplace UI
- Advanced filtering/search
- Visual agent browser
- Integration guides
- Rating & review system

---

## CLI Tools

### Browse Agents

```bash
# Interactive agent browser
npm run marketplace:browse

# Search agents
npm run marketplace:search "code review"

# Filter by category
npm run marketplace:filter --category=github

# Show agent details
npm run marketplace:show core-coder
```

---

## Integration Examples

### In Code

```javascript
const marketplace = require('./marketplace.json');

// Find all agents in a category
const githubAgents = marketplace.agents.filter(a => a.category === 'github');

// Search by capability
const planningAgents = marketplace.agents.filter(a => 
  a.capabilities.includes('planning')
);

// Get agent by ID
const coder = marketplace.agents.find(a => a.id === 'core-coder');

// Get related agents
const related = coder.related_agents.map(id => 
  marketplace.agents.find(a => a.id === id)
);
```

### Via API

```bash
# Get all agents
GET /api/agents

# Search
GET /api/agents/search?q=code&category=core

# Filter
GET /api/agents?difficulty=advanced&rating=4.5+

# Get agent details
GET /api/agents/{agent-id}

# Get category
GET /api/categories/{category-id}
```

---

## Contributing

To add a new agent:

1. Create agent markdown file in appropriate directory
2. Add YAML frontmatter with metadata
3. Run `npm run marketplace:generate`
4. Verify in `marketplace.json`
5. Submit PR

---

## License

MIT - Fused Gaming

**Last Updated**: 2026-09-30
