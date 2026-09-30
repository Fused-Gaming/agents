# Adding New Agents to Marketplace

This document provides a template for adding discovered agents to the Fused Gaming Agents Marketplace.

## Agent Addition Checklist

### 1. Agent Identification
- [ ] Agent name confirmed
- [ ] Agent purpose clear
- [ ] Repository location identified
- [ ] License verified (Apache-2.0 + Non-Commercial)
- [ ] Production-ready status confirmed
- [ ] Prompt file accessible

### 2. Metadata Extraction
Complete the following information:

```json
{
  "id": "agent-id-kebab-case",
  "name": "Agent Display Name",
  "category": "github|v3|templates|flow-nexus|...",
  "status": "active",
  "description": "Brief description of agent purpose",
  "capabilities": [
    "capability-1",
    "capability-2"
  ],
  "author": "Fused Gaming",
  "license": "Apache-2.0",
  "tags": [
    "tag1",
    "tag2"
  ]
}
```

### 3. Prompt File Creation
- [ ] Create `agent-prompts/[category]/[agent-id].md`
- [ ] Include agent role and identity
- [ ] Document objectives and capabilities
- [ ] List available tools/functions
- [ ] Define constraints and limitations
- [ ] Provide usage examples

### 4. Registry Update

Add entry to `marketplace-registry.json`:
- Add to `registry.agents` array
- Update `stats.totalAgents`
- Update category breakdown
- Ensure all fields populated

### 5. Catalog Update

Update `AGENTS_CATALOG.md`:
- Add agent to category section
- Add to use-case section if applicable
- Update statistics if needed
- Add to capability index

### 6. Version Update

Update `VERSION.json`:
- Increment total agents count
- Update categories if needed
- Update last updated timestamp
- Note changes in metadata

### 7. Commit & Push

Create commit with:
```bash
git add marketplace-registry.json agent-prompts/[category]/[agent-id].md
git commit -m "Add [agent-name] agent to agents marketplace

- Add [agent-name] for [purpose]
- Category: [category]
- Capabilities: [key capabilities]
- Location: [repository]"
git push origin main
```

## Agent Categories

- **github**: GitHub integration and automation
- **v3**: V3 framework implementation
- **templates**: Pre-built agent templates
- **flow-nexus**: Workflow orchestration
- **consensus**: Multi-agent consensus
- **swarm**: Swarm intelligence
- **hive-mind**: Unified intelligence
- **optimization**: Performance optimization
- **sparc**: SPARC framework
- **goal**: Goal management
- **testing**: Test validation
- **case-management**: Case/legal workflows *(NEW)*
- **content-generation**: Content creation *(NEW)*
- **data-analysis**: Data analytics *(NEW)*
- **automation**: Process automation

## Example: Adding a Case-Canon Agent

### Input Information
```
Name: Case Workflow Orchestrator
Purpose: Coordinate multi-step legal case workflows
Repository: Fused-Gaming/case-canon
Category: case-management
```

### JSON Entry
```json
{
  "id": "case-workflow-orchestrator",
  "name": "Case Workflow Orchestrator",
  "category": "case-management",
  "status": "active",
  "description": "Orchestrate complex multi-step legal case workflows with state management",
  "capabilities": [
    "workflow-orchestration",
    "case-state-tracking",
    "multi-agent-coordination",
    "timeline-management"
  ],
  "author": "Fused Gaming",
  "license": "Apache-2.0",
  "tags": ["case-management", "legal", "workflow", "orchestration"]
}
```

### Prompt File
Create `agent-prompts/case-management/case-workflow-orchestrator.md`:
```markdown
# Case Workflow Orchestrator

**Role**: Legal workflow coordinator and case management agent

**Objectives**:
- Manage complex multi-step legal workflows
- Track case state and milestones
- Coordinate between case agents
- Maintain timeline and dependencies

**Capabilities**:
- Workflow definition and execution
- Case state persistence
- Multi-agent coordination
- Timeline and deadline management

**Constraints**:
- Follow legal and compliance requirements
- Maintain confidentiality
- Ensure audit trails

**Tools**:
- coordinate-workflow
- update-case-state
- track-timeline
- manage-dependencies
```

### Statistics Update
```json
"case-management": {
  "name": "Case Management",
  "count": 1,
  "description": "Legal case workflow and management agents"
}
```

## Quality Assurance

Before committing:
- [ ] JSON is valid (use jq)
- [ ] All required fields present
- [ ] Prompt file is complete
- [ ] Category is appropriate
- [ ] Description is clear
- [ ] Tags are relevant
- [ ] License is correct
- [ ] Agent is production-ready
- [ ] No duplicate IDs

## Testing Addition

After commit, verify:

```bash
# Check JSON validity
jq '.registry.agents[] | select(.id=="new-agent-id")' marketplace-registry.json

# Verify statistics
jq '.stats' marketplace-registry.json

# Verify prompt file exists
ls agent-prompts/[category]/[agent-id].md

# Validate registry
jq '.registry | keys' marketplace-registry.json
```

## Common Issues

### Issue: Agent not in registry
**Solution**: Ensure entry added to `registry.agents` array

### Issue: Prompt file missing
**Solution**: Create prompt file in correct category folder

### Issue: Statistics don't match
**Solution**: Count agents manually and update stats

### Issue: Duplicate ID
**Solution**: Use unique kebab-case id, check existing entries

## Maintenance

After adding agents:
1. Track in VERSION.json
2. Update MANIFEST.md if major changes
3. Keep AGENTS_CATALOG.md in sync
4. Update MARKETPLACE.md if new category
5. Ensure prompt files are in agent-prompts/

## Support

For agent integration questions:
- Check existing entries in marketplace-registry.json
- Review MARKETPLACE.md for specifications
- Verify LICENSE compliance
- Consult AGENTS_CATALOG.md for examples
