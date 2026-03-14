export class commonResources {
  constructor(page) {
    this.page = page;

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  }
}