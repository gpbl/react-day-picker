import { configureAxe } from 'jest-axe';

export const axe = configureAxe({
  rules: {
    'aria-allowed-role': { enabled: false }
  }
});
