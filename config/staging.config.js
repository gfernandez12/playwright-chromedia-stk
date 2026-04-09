// @ts-check
import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';
import baseConfig from '../playwright.config.js';

config({ path: '.env.staging' });
config(); // fallback to .env for local dev

export default defineConfig({
  ...baseConfig,
  use: {
    ...baseConfig.use,
    baseURL: process.env.STAGING_URL || 'https://strak-stage.chromedia.net',
  },
});
