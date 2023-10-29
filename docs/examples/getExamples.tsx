import {
  getHighlighter,
  renderToHtml,
  type Highlighter,
  type Lang
} from 'shiki';

/**
 * Return the props including the highlighted examples in the markdown.
 *
 * @prop examples - The file names of the examples to include in the markdown.
 */
export async function getExamples(examples: string[]) {
  const highlightedExamples: Record<string, string> = {};

  for (const source of examples) {
    const raw = await import(`!!raw-loader!./${source}`);
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

let highlighter: Highlighter;

async function highlightCode(code: string, lang: Lang) {
  const theme = 'css-variables';
  let sourceCodeHighlighter = highlighter;
  if (!highlighter) {
    sourceCodeHighlighter = await getHighlighter({
      langs: ['tsx', 'css'],
      theme
    });
  }
  const themedTokens = sourceCodeHighlighter.codeToThemedTokens(
    code,
    lang,
    theme
  );
  const html = renderToHtml(themedTokens);
  return html;
}
