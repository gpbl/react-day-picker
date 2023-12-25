import { type Highlighter, type Lang } from 'shiki';
import { highlightCode } from './highlightCode';

/**
 * Return the props including the highlighted examples in the markdown.
 *
 * @prop examples - The file names of the examples to include in the markdown.
 */
export async function getSrc(examples: string[]) {
  const highlightedExamples: Record<string, { ts: string; js: string }> = {};

  for (const source of examples) {
    const rawTS = await import(`!!raw-loader!examples/ts/${source}`);
    const tsCode = rawTS.default.replace('export default ', '').trim();
    const tsHTML = await highlightCode(tsCode, source.substr(-3) as Lang);

    const rawJS = await import(
      `!!raw-loader!examples/ts/${source.split('.')[0]}`
    );
    const jsCode = rawJS.default.replace('export default ', '').trim();
    const jsHTML = await highlightCode(jsCode, source.substr(-3) as Lang);

    highlightedExamples[source] = {
      ts: tsHTML,
      js: jsHTML
    };
  }
  return {
    props: {
      ssg: highlightedExamples
    }
  };
}

export let highlighter: Highlighter;
