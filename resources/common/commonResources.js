export class commonResources {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.logoutMenu = page.locator('button[aria-haspopup="menu"]').first();
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  }

  generateCompanyName() {
    const adjectives = ['Global', 'Dynamic', 'Premier', 'Apex', 'Nexus', 'Summit', 'Vortex', 'Pinnacle'];
    const nouns = ['Solutions', 'Systems', 'Technologies', 'Ventures', 'Enterprises', 'Group', 'Partners', 'Industries'];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `Automation - ${adj} ${noun} ${number}`;
  }

  generateAccountName() {
    const prefixes = ['Alpha', 'Beta', 'Delta', 'Sigma', 'Omega', 'Nova', 'Echo', 'Titan'];
    const types = ['Corp', 'LLC', 'Inc', 'Co', 'Group', 'Associates', 'Holdings', 'Consulting'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `Automation - ${prefix} ${type} ${number}`;
  }

  generateCompanyPhone() {
    const area = Math.floor(Math.random() * 900) + 100;
    const mid = Math.floor(Math.random() * 900) + 100;
    const last = Math.floor(Math.random() * 9000) + 1000;
    return `${area}-${mid}-${last}`;
  }

  generateAddress() {
    const numbers = Math.floor(Math.random() * 9000) + 1000;
    const streets = ['Automation Ave', 'Automation Blvd', 'Automation Dr', 'Automation St', 'Automation Ln'];
    const street = streets[Math.floor(Math.random() * streets.length)];
    return `${numbers} ${street}`;
  }

  generateCity() {
    const cities = ['Automation City', 'Automation Springs', 'Automation Falls', 'Automation Creek', 'Automation Park'];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  generateEmailExtension() {
    const domains = ['automation.com', 'automation.io', 'automation.net', 'automation.org', 'automation.co'];
    return domains[Math.floor(Math.random() * domains.length)];
  }

  generateTestUrl() {
    const words = ['alpha', 'beta', 'delta', 'sigma', 'omega', 'nova', 'echo', 'titan'];
    const word = words[Math.floor(Math.random() * words.length)];
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `https://automation-${word}-${number}.test.com`;
  }

  generateTestEmail() {
    const firstNames = ['alex', 'jordan', 'morgan', 'taylor', 'casey', 'riley', 'quinn', 'avery'];
    const lastNames = ['smith', 'johnson', 'brown', 'davis', 'wilson', 'moore', 'taylor', 'anderson'];
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `test.${first}.${last}+${number}@test.com`;
  }

  async logout() {
    try {
      await this.logoutMenu.click();
      await this.page.getByRole('menuitem', { name: /logout/i }).waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByRole('menuitem', { name: /logout/i }).click();
    } catch (error) {
      console.error(`Logout failed: ${error.message}`);
    }
  }
}
