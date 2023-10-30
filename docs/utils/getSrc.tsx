import { type Highlighter, type Lang } from 'shiki';
import { highlightCode } from './highlightCode';

/**
 * Return the props including the highlighted examples in the markdown.
 *
 * @prop examples - The file names of the examples to include in the markdown.
 */
export async function getSrc(examples: string[]) {
  const highlightedExamples: Record<string, string> = {};

  for (const source of examples) {
    const raw = await import(`!!raw-loader!../examples/${source}`);
    // Replace imports from the code
    const code = raw.default.replace('export default ', '').trim();
    const html = await highlightCode(code, source.substr(-3) as Lang);
    highlightedExamples[source] = html;
  }
  return {
    props: {
      ssg: highlightedExamples
    }
  };
}

export let highlighter: Highlighter;
