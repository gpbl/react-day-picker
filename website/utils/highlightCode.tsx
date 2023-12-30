import { getHighlighter, renderToHtml, type Lang } from 'shiki';
import { highlighter } from './getSrc';

export async function highlightCode(code: string, lang: Lang) {
  const theme = 'css-variables';
  let sourceCodeHighlighter = highlighter;
  if (!highlighter) {
    sourceCodeHighlighter = await getHighlighter({
      langs: ['jsx', 'tsx', 'css'],
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
