import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { Renderer } from 'typedoc';

export class MarkdownCustomTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }
}
