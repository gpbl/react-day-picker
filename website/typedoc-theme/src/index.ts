import { Application } from 'typedoc';
import { MarkdownCustomTheme } from './theme.js';

export function load(app: Application) {
  app.renderer.defineTheme('custom-typedoc-theme', MarkdownCustomTheme);
}
