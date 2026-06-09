/**
 * Pure data generation helpers for test fixtures.
 * All functions return plain values — no page/browser dependency.
 */

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function generateAccountName() {
  const prefixes = ['Alpha', 'Beta', 'Delta', 'Sigma', 'Omega', 'Nova', 'Echo', 'Titan'];
  const types = ['Corp', 'LLC', 'Inc', 'Co', 'Group', 'Associates', 'Holdings', 'Consulting'];
  return `Automation - ${rand(prefixes)} ${rand(types)} ${randInt(1000, 9999)}`;
}

export function generateCompanyName() {
  const adjectives = ['Global', 'Dynamic', 'Premier', 'Apex', 'Nexus', 'Summit', 'Vortex', 'Pinnacle'];
  const nouns = ['Solutions', 'Systems', 'Technologies', 'Ventures', 'Enterprises', 'Group', 'Partners', 'Industries'];
  return `Automation - ${rand(adjectives)} ${rand(nouns)} ${randInt(1000, 9999)}`;
}

export function generateCompanyPhone() {
  return `${randInt(100, 999)}-${randInt(100, 999)}-${randInt(1000, 9999)}`;
}

export function generateAddress() {
  const streets = ['Automation Ave', 'Automation Blvd', 'Automation Dr', 'Automation St', 'Automation Ln'];
  return `${randInt(1000, 9999)} ${rand(streets)}`;
}

export function generateCity() {
  const cities = ['Automation City', 'Automation Springs', 'Automation Falls', 'Automation Creek', 'Automation Park'];
  return rand(cities);
}

export function generateTestUrl() {
  const words = ['alpha', 'beta', 'delta', 'sigma', 'omega', 'nova', 'echo', 'titan'];
  return `https://automation-${rand(words)}-${randInt(1000, 9999)}.test.com`;
}

export function generateTestEmail() {
  const firstNames = ['alex', 'jordan', 'morgan', 'taylor', 'casey', 'riley', 'quinn', 'avery'];
  const lastNames = ['smith', 'johnson', 'brown', 'davis', 'wilson', 'moore', 'taylor', 'anderson'];
  return `test.${rand(firstNames)}.${rand(lastNames)}+${randInt(1000, 9999)}@test.com`;
}

export function generateEmailDomain() {
  const domains = ['automation.com', 'automation.io', 'automation.net', 'automation.org', 'automation.co'];
  return rand(domains);
}

/**
 * Generate a complete account form payload.
 * @returns {{ name: string, url: string, phone: string, address1: string, address2: string, city: string }}
 */
export function generateAccountFormData() {
  return {
    name: generateAccountName(),
    url: generateTestUrl(),
    phone: generateCompanyPhone(),
    address1: generateAddress(),
    address2: `Suite ${randInt(100, 999)}`,
    city: generateCity(),
  };
}
