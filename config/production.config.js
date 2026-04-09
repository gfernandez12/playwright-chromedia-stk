// @ts-check
import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';
import baseConfig from '../playwright.config.js';

config({ path: '.env.production' });

export default defineConfig({
  ...baseConfig,
  use: {
    ...baseConfig.use,
    baseURL: process.env.PRODUCTION_URL,
  },
});
