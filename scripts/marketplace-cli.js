#!/usr/bin/env node

/**
 * Marketplace CLI
 *
 * Interactive command-line interface for browsing and searching agents
 * in the agent marketplace.
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MARKETPLACE_FILE = path.join(__dirname, '../docs/reference/marketplace.json');

class MarketplaceCLI {
  constructor() {
    this.marketplace = this.loadMarketplace();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  loadMarketplace() {
    try {
      const data = fs.readFileSync(MARKETPLACE_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.error('❌ Failed to load marketplace:', err.message);
      process.exit(1);
    }
  }

  /**
   * Display main menu
   */
  showMenu() {
    console.clear();
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    🛍️  AGENT MARKETPLACE CLI                   ║
╚════════════════════════════════════════════════════════════════╝

${this.marketplace.marketplace.totalAgents} agents available

What would you like to do?

  1) 🔍  Search agents
  2) 📂  Browse by category
  3) 🏆  View top-rated agents
  4) 🏷️  Filter by capability
  5) 📊  Show marketplace stats
  6) 📖  Read documentation
  7) ❌  Exit

    `);
    this.prompt('Choose an option (1-7): ', this.handleMenuChoice.bind(this));
  }

  /**
   * Handle menu choice
   */
  handleMenuChoice(choice) {
    switch (choice.trim()) {
      case '1':
        this.searchAgents();
        break;
      case '2':
        this.browseCategories();
        break;
      case '3':
        this.showTopRated();
        break;
      case '4':
        this.filterByCapability();
        break;
      case '5':
        this.showStats();
        break;
      case '6':
        console.log('\n📖 See MARKETPLACE.md for detailed documentation');
        setTimeout(() => this.showMenu(), 2000);
        break;
      case '7':
        console.log('\n👋 Goodbye!\n');
        this.rl.close();
        process.exit(0);
        break;
      default:
        this.prompt('\n❌ Invalid choice. Press enter to continue...', () => this.showMenu());
    }
  }

  /**
   * Search agents by keyword
   */
  searchAgents() {
    console.clear();
    console.log('🔍 SEARCH AGENTS\n');
    this.prompt('Enter search term: ', (query) => {
      const results = this.marketplace.agents.filter(agent => {
        const searchStr = `${agent.name} ${agent.description} ${agent.tags.join(' ')}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
      });

      if (results.length === 0) {
        console.log('\n❌ No agents found matching your search.\n');
        this.prompt('Press enter to continue...', () => this.showMenu());
      } else {
        this.displayAgentList(results, `Search Results (${results.length})`);
      }
    });
  }

  /**
   * Browse agents by category
   */
  browseCategories() {
    console.clear();
    console.log('📂 BROWSE CATEGORIES\n');

    const sortedCategories = Object.values(this.marketplace.categories)
      .sort((a, b) => a.order - b.order);

    sortedCategories.forEach((cat, idx) => {
      console.log(`  ${idx + 1}) ${cat.icon} ${cat.name} (${cat.count})`);
    });

    this.prompt('\nSelect category (1-' + sortedCategories.length + '): ', (choice) => {
      const idx = parseInt(choice) - 1;
      if (idx < 0 || idx >= sortedCategories.length) {
        this.prompt('\n❌ Invalid choice. Press enter to continue...', () => this.browseCategories());
        return;
      }

      const category = sortedCategories[idx];
      const agents = this.marketplace.agents.filter(a => a.category === category.id);
      this.displayAgentList(agents, `${category.icon} ${category.name}`);
    });
  }

  /**
   * Show top-rated agents
   */
  showTopRated() {
    console.clear();
    console.log('🏆 TOP RATED AGENTS\n');

    const topAgents = this.marketplace.agents
      .sort((a, b) => (b.stats?.rating || 0) - (a.stats?.rating || 0))
      .slice(0, 20);

    this.displayAgentList(topAgents, 'Top Rated');
  }

  /**
   * Filter by capability
   */
  filterByCapability() {
    console.clear();
    console.log('🏷️  FILTER BY CAPABILITY\n');

    this.marketplace.capabilities.forEach((cap, idx) => {
      if (idx % 2 === 0) console.log();
      process.stdout.write(`  ${cap.padEnd(25)}`);
    });

    console.log('\n');
    this.prompt('Enter capability: ', (capability) => {
      const agents = this.marketplace.agents.filter(a =>
        a.capabilities.includes(capability.toLowerCase().replace(/ /g, '_'))
      );

      if (agents.length === 0) {
        console.log('\n❌ No agents found with that capability.\n');
        this.prompt('Press enter to continue...', () => this.showMenu());
      } else {
        this.displayAgentList(agents, `Agents with "${capability}" capability`);
      }
    });
  }

  /**
   * Display marketplace statistics
   */
  showStats() {
    console.clear();
    const stats = this.marketplace.stats;
    const mp = this.marketplace.marketplace;

    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    📊 MARKETPLACE STATISTICS                   ║
╚════════════════════════════════════════════════════════════════╝

Total Agents:        ${stats.totalAgents}
Categories:          ${stats.categoriesCount}
Capabilities:        ${stats.capabilitiesCount}
Average Rating:      ${stats.averageRating}/5.0

Version:             ${mp.version}
Last Updated:        ${mp.lastUpdated}
Maintainer:          ${mp.metadata.maintainer}

═══════════════════════════════════════════════════════════════════

Agents by Difficulty:

    `);

    const difficulties = {};
    this.marketplace.agents.forEach(agent => {
      const diff = agent.difficulty || 'unspecified';
      difficulties[diff] = (difficulties[diff] || 0) + 1;
    });

    Object.entries(difficulties).forEach(([diff, count]) => {
      console.log(`  ${diff.padEnd(20)} ${count.toString().padStart(3)} agents`);
    });

    console.log();
    this.prompt('Press enter to continue...', () => this.showMenu());
  }

  /**
   * Display list of agents
   */
  displayAgentList(agents, title) {
    console.clear();
    console.log(`\n${title} (${agents.length} agents)\n`);

    agents.forEach((agent, idx) => {
      const difficulty = (agent.difficulty || 'intermediate').toUpperCase().substring(0, 3);
      const rating = (agent.stats?.rating || 4.5).toFixed(1);
      console.log(`  ${(idx + 1).toString().padStart(3)}. ${agent.name.padEnd(25)} [${difficulty}] ⭐${rating}`);
    });

    console.log();
    this.prompt('Enter agent number for details (or press enter to go back): ', (choice) => {
      if (!choice.trim()) {
        this.showMenu();
        return;
      }

      const idx = parseInt(choice) - 1;
      if (idx < 0 || idx >= agents.length) {
        this.prompt('❌ Invalid choice. Press enter to try again...', () => {
          this.displayAgentList(agents, title);
        });
        return;
      }

      this.showAgentDetails(agents[idx]);
    });
  }

  /**
   * Show detailed agent information
   */
  showAgentDetails(agent) {
    console.clear();
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║  ${agent.name.padEnd(59)} ║
╚════════════════════════════════════════════════════════════════╝

Category:          ${this.getCategoryName(agent.category)}
Difficulty:        ${agent.difficulty || 'intermediate'}
Rating:            ${'⭐'.repeat(Math.round(agent.stats?.rating || 4.5))} (${agent.stats?.rating || 4.5}/5.0)
Version:           ${agent.version || '1.0.0'}

Description:
${agent.description}

Capabilities:
${agent.capabilities.length > 0 ? agent.capabilities.map(c => `  • ${c}`).join('\n') : '  (none)'}

Use Cases:
${agent.use_cases.length > 0 ? agent.use_cases.map(u => `  • ${u}`).join('\n') : '  (none)'}

Tags:
${agent.tags.map(t => `  • ${t}`).join('\n')}

File:              ${agent.path}

═══════════════════════════════════════════════════════════════════
    `);

    this.prompt('Press enter to go back...', () => this.showMenu());
  }

  /**
   * Get category name from ID
   */
  getCategoryName(categoryId) {
    const cat = this.marketplace.categories[categoryId];
    return cat ? `${cat.icon} ${cat.name}` : categoryId;
  }

  /**
   * Prompt helper
   */
  prompt(question, callback) {
    this.rl.question(question, callback);
  }

  /**
   * Start the CLI
   */
  start() {
    this.showMenu();
  }
}

// Run CLI if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const cli = new MarketplaceCLI();
  cli.start();
}

export default MarketplaceCLI;
