import { Code, Pre } from 'nextra/components';
import { useData } from 'nextra/data';
import { getHighlighter, renderToHtml } from 'shiki';

import type { Highlighter, Lang, Theme } from 'shiki';

type SourceCodeProps = {
  /** The name of the file in the `docs/example` directory. */
  source: string;
  filename?: string;
  theme?: Theme;
};

/**
 * Render a code block with the source of `docs/example/${props.fileName}`,
 * highlighted using nextra code blocks.
 *
 * Requires `getStaticProps` from the MDX file using `lib/getExampleStaticProps`
 * to export the examples source code.
 *
 * @example
 *
 * ```mdx
 * Some markdown rendering the source code of `example1.tsx` and `example2.tsx`.
 *
 * <SourceCode fileName="example1.tsx" />
 * <SourceCode fileName="example2.tsx" />
 *
 * export const getStaticProps = () => getExampleStaticProps(['example1.tsx', 'example2.tsx']);
 * ```
 *
 * @see https://github.com/shuding/nextra/discussions/2167
 */
export function SourceCode(props: SourceCodeProps) {
  const lang = props.source.substr(-3);
  const { source, theme, filename = `App.${lang}` } = props;

  const examples = useData();

  if (!examples[source]) {
    return (
      <Pre>
        Example {source} not found. Did you add it to{' '}
        <code>getSourceCodeStaticProps</code>?
      </Pre>
    );
  }

  const html = examples[source]
    // Remove out HTML components we replace with nextra components
    .replace(/<\/?(pre|code) ?[^>]*>/gi, '')
    // For some reasons, when doing this empty lines are lost
    .replaceAll(
      '<span class="line"></span>',
      '<span class="line">\n</span>',
      'gi'
    );

  return (
    <Pre
      data-theme={theme}
      data-language={lang}
      hasCopyCode
      filename={filename}
    >
      <Code
        data-theme={theme}
        data-language={lang}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Pre>
  );
}

let highlighter: Highlighter;

async function highlightCode(code: string, lang: Lang) {
  const theme = 'css-variables';
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: ['tsx', 'css'],
      theme
    });
  }
  const themedTokens = highlighter.codeToThemedTokens(code, lang, theme);
  const html = renderToHtml(themedTokens);
  return html;
}

/** Creates the `getStaticProp` function to use the given file names in the SourceCode component. */
export async function getSourceCodeStaticProps(sources: string[]) {
  const highlightedExamples: Record<string, string> = {};

  for (const source of sources) {
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
