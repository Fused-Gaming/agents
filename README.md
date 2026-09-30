# 🛍️ Agent Marketplace

The **official repository** for Fused Gaming's comprehensive collection of 100+ specialized Claude agents.

A scalable, modular marketplace with interactive discovery tools, auto-generation, and a clear evolution roadmap.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](marketplace.json)
[![Agents](https://img.shields.io/badge/agents-100+-brightgreen.svg)]()
[![Categories](https://img.shields.io/badge/categories-24-purple.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 🎯 What is This?

A **centralized hub** for discovering, exploring, and integrating Claude agents across your projects.

- **100+ agents** organized into 24 categories
- **Rich metadata** with capabilities, use cases, difficulty levels
- **Interactive CLI** for exploration and discovery
- **Auto-generation** from source agent files
- **Scalable design** for unlimited growth

---

## 🚀 Quick Start

### Browse Agents Interactively

```bash
npm run marketplace:browse
```

Launches an interactive CLI menu to:
- 🔍 Search agents by keyword
- 📂 Browse by category
- 🏆 View top-rated agents
- 🏷️ Filter by capability
- 📊 See statistics
- 📖 Read documentation

### Search Agents

```bash
# Find code review agents
npm run agents:search "code review"

# List all agents
npm run agents:list

# Group by category
npm run agents:by-category
```

### View the Catalog

```bash
# Open marketplace.json directly
cat marketplace.json | jq .

# See full documentation
cat MARKETPLACE.md
```

---

## 📚 Key Resources

| Resource | Purpose |
|----------|---------|
| [marketplace.json](marketplace.json) | Complete agent catalog with metadata |
| [MARKETPLACE.md](MARKETPLACE.md) | Full documentation & schema guide |
| [agent-prompts/](agent-prompts/) | 100+ agent markdown files |
| [scripts/](scripts/) | Automation & CLI tools |

---

## 🗂️ Agent Categories

The marketplace organizes agents into 24 categories:

### Development & Core
- **⚙️ Core (5)** - Essential agents (coder, tester, planner, reviewer, researcher)
- **🛠️ Development (5)** - Backend, APIs, infrastructure
- **📚 Documentation (2)** - API docs, technical writing
- **🏗️ Architecture (2)** - System design, planning

### Coordination & Swarms
- **🐝 Swarm (5)** - Multi-agent coordination
- **🧠 Hive Mind (5)** - Collective intelligence
- **🔄 Dual-Mode (3)** - Flexible operational modes
- **🎯 Goal Planning (3)** - Complex objective planning

### Specialized Domains
- **🐙 GitHub (13)** - CI/CD, PR management, releases
- **🌊 Flow Nexus (9)** - Platform-specific agents
- **✨ SPARC (4)** - Methodology-based phases
- **⛓️ Consensus (7)** - Distributed systems, algorithms
- **⚡ Optimization (5)** - Performance, tuning
- **📊 Sublinear (5)** - Advanced algorithms
- **✅ Testing (4)** - QA, validation
- **🔬 Data & ML (2)** - Machine learning
- **🔍 Analysis (2)** - Code review, insights
- **🎓 Specialized (3)** - Domain-specific
- **📋 Templates (9)** - Reusable patterns
- **🧪 Custom (2)** - Experimental
- **🚀 V3 Integration (10)** - V3 specialists
- **💳 Payments (1)** - Financial operations

---

## 🔍 Searching & Filtering

### By Keyword

```bash
# Search in CLI
npm run marketplace:browse
# Then select option 1 (Search)

# Or via jq
jq '.agents[] | select(.description | contains("testing"))' marketplace.json
```

### By Category

```bash
# Browse in CLI
npm run marketplace:browse
# Then select option 2 (Browse by category)

# Or via jq
jq '.agents[] | select(.category == "core")' marketplace.json
```

### By Capability

```bash
# Browse in CLI
npm run marketplace:browse
# Then select option 4 (Filter by capability)

# Or via jq
jq '.agents[] | select(.capabilities[] == "code_review")' marketplace.json
```

### By Difficulty

```bash
jq '.agents[] | select(.difficulty == "advanced")' marketplace.json
```

### By Rating

```bash
jq '.agents[] | select(.stats.rating > 4.5) | sort_by(-.stats.rating)' marketplace.json
```

---

## 📊 Marketplace Statistics

```json
{
  "totalAgents": 100,
  "categoriesCount": 24,
  "capabilitiesCount": 30,
  "averageRating": 4.5,
  "lastUpdated": "2026-09-30"
}
```

View live stats:
```bash
npm run marketplace:browse
# Then select option 5 (Show statistics)
```

---

## 🛠️ Scripts & Tools

### Generate Marketplace

Regenerates `marketplace.json` from agent files:

```bash
npm run marketplace:generate
```

This script:
- Scans `agent-prompts/` directory
- Extracts YAML frontmatter from each agent
- Generates standardized entries
- Updates categories and statistics
- Maintains consistency

**When to run:**
- After adding new agents
- When agent metadata changes
- To update statistics

### Interactive CLI

Browse agents interactively:

```bash
npm run marketplace:browse
```

Features:
- 🔍 Full-text search
- 📂 Category browsing
- 🏆 Rating/popularity sorting
- 🏷️ Capability filtering
- 📊 Statistics dashboard
- 📖 Documentation links

### npm Scripts

```bash
# Core operations
npm run marketplace:generate  # Regenerate from agents
npm run marketplace:browse    # Launch interactive CLI

# Queries (requires jq)
npm run agents:list           # List all agents
npm run agents:by-category    # Group by category
npm run agents:search "term"  # Search agents
```

---

## 📖 Agent File Format

Agents are markdown files with YAML frontmatter:

```markdown
---
name: coder
type: developer
color: "#FF6B35"
description: Implementation specialist for writing clean, efficient code
capabilities:
  - code_generation
  - refactoring
  - api_design
version: 1.0.0
---

# Agent content here
...
```

**Field Reference:**
| Field | Type | Required | Example |
|-------|------|----------|---------|
| name | string | ✅ | `coder` |
| description | string | ✅ | `Implementation specialist...` |
| type | string | ❌ | `developer` |
| color | string | ❌ | `#FF6B35` |
| capabilities | array | ❌ | `[code_generation, refactoring]` |
| version | string | ❌ | `1.0.0` |

---

## 🧩 Integration Examples

### In Node.js

```javascript
const marketplace = require('./marketplace.json');

// Find agent by ID
const coder = marketplace.agents.find(a => a.id === 'core-coder');

// Get all agents in category
const githubAgents = marketplace.agents.filter(a => a.category === 'github');

// Find agents with capability
const reviewers = marketplace.agents.filter(a => 
  a.capabilities.includes('code_review')
);

// Sort by rating
const topAgents = marketplace.agents
  .sort((a, b) => (b.stats?.rating || 0) - (a.stats?.rating || 0))
  .slice(0, 10);
```

### In Python

```python
import json

with open('marketplace.json') as f:
    marketplace = json.load(f)

# Find agent
coder = next((a for a in marketplace['agents'] if a['id'] == 'core-coder'), None)

# Filter by category
github_agents = [a for a in marketplace['agents'] if a['category'] == 'github']

# Search by capability
reviewers = [a for a in marketplace['agents'] 
             if 'code_review' in a.get('capabilities', [])]
```

### Via CLI (jq)

```bash
# List agent names
jq '.agents[].name' marketplace.json

# Get all GitHub agents
jq '.agents[] | select(.category == "github") | .name' marketplace.json

# Find agents by capability
jq '.agents[] | select(.capabilities[] == "swarm_coordination")' marketplace.json

# Show top 5 agents by rating
jq '.agents | sort_by(-.stats.rating) | .[0:5]' marketplace.json
```

---

## 🚀 Roadmap

### ✅ Phase 1: Foundation (COMPLETE)
- [x] Agent collection (100+ agents)
- [x] Marketplace schema design
- [x] Auto-generation system
- [x] CLI discovery tool
- [x] Documentation

### 📋 Phase 2: Discovery Enhancement (v1.1)
- [ ] Community ratings system
- [ ] Usage analytics dashboard
- [ ] Popular agents ranking
- [ ] User reviews & feedback
- [ ] Agent trending metrics

### 🔗 Phase 3: Composition & Orchestration (v1.2)
- [ ] Workflow definitions (YAML/JSON)
- [ ] Pre-built agent swarms
- [ ] Agent composition patterns
- [ ] Orchestration guides
- [ ] Template workflows

### 🌐 Phase 4: Web Marketplace (v2.0)
- [ ] Interactive marketplace UI
- [ ] Advanced search/filtering
- [ ] Visual agent browser
- [ ] Rating & review system
- [ ] Integration guides
- [ ] API endpoints

---

## 🏗️ Architecture

### Data Layer

```
marketplace.json
├── Marketplace metadata (version, source, dates)
├── Categories (24 curated categories)
├── Capabilities (30+ standard capabilities)
├── Agents (100+ agent entries)
├── Search configuration
└── Statistics
```

### Tools

```
scripts/
├── generate-marketplace.js (Auto-generator)
└── marketplace-cli.js (Interactive browser)
```

### Documentation

```
├── README.md (This file)
├── MARKETPLACE.md (Complete guide)
└── AGENT_CONTRIBUTION_GUIDE.md (Coming soon)
```

---

## 🤝 Contributing

To add a new agent:

1. **Create agent file** in `agent-prompts/{category}/`
2. **Add YAML frontmatter** with metadata
3. **Run generation**:
   ```bash
   npm run marketplace:generate
   ```
4. **Verify** in `marketplace.json`
5. **Submit PR**

Example agent:

```markdown
---
name: my-agent
type: developer
description: My awesome agent
capabilities:
  - my_capability
---

# My Agent

Description and usage...
```

---

## 📝 License

MIT - Fused Gaming

---

## 🔗 Links

- **Repository**: https://github.com/Fused-Gaming/agents
- **Issues**: https://github.com/Fused-Gaming/agents/issues
- **Marketplace**: [marketplace.json](marketplace.json)
- **Documentation**: [MARKETPLACE.md](MARKETPLACE.md)
- **Source**: [Fused-Gaming/Fused-Gaming-Skill-MCP](https://github.com/Fused-Gaming/Fused-Gaming-Skill-MCP)

---

## 💡 Features Highlights

✨ **Wonderfully Organized**
- 24 categories with icons
- Rich metadata for every agent
- Clear difficulty levels
- Capability-based discovery

🔍 **Easily Discoverable**
- Full-text search
- Multi-index searching
- Filter by category/capability/difficulty
- Interactive CLI browser

📈 **Scalable Design**
- Add agents without code changes
- Extensible schema
- Custom fields support
- Auto-generation from sources

🤖 **Developer Friendly**
- JSON marketplace
- CLI tools
- npm scripts
- Integration examples

🚀 **Future Ready**
- Clear evolution roadmap
- Planned web UI
- API design ready
- Analytics tracking

---

## ❓ FAQ

**Q: How many agents are in the marketplace?**
A: 100+ agents across 24 categories

**Q: Can I add my own agent?**
A: Yes! See the Contributing section

**Q: Is the marketplace schema extensible?**
A: Yes! Add custom fields and capabilities freely

**Q: How is the marketplace updated?**
A: Auto-generated from agent markdown files

**Q: Can I use this in production?**
A: Yes! marketplace.json is production-ready

**Q: What's the best way to search?**
A: Use `npm run marketplace:browse` for interactive discovery

---

**Last Updated**: 2026-09-30  
**Version**: 1.0.0  
**Maintained By**: Fused Gaming
