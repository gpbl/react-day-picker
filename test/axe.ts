import { configureAxe } from 'jest-axe';

export const axe = configureAxe({
  runOnly: ['wcag2aa', 'best-practice'],
  rules: {
    'aria-allowed-role': { enabled: false }
  }
});
