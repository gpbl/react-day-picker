import { Code, Pre } from 'nextra/components';
import { useData } from 'nextra/data';

import { parseHighlightLines } from './parseHighlightLines';

import * as examples from '@examples/index';

import { RenderingBox } from '@components/RenderingBox';

import type { Theme } from 'shiki';

type SourceCodeProps = {
  /** The name of the file in the `docs/example` directory. */
  fileName: string;
  title?: string;
  'data-theme'?: Theme;
  'data-line-numbers'?: string;
  /** The line numbers to highlight e.g highlightLines="1,3-4" */
  highlightLines?: string;
};

/**
 * Render a code block with the source of `docs/example/${props.fileName}`,
 * highlighted using nextra code blocks.
 * @see https://github.com/shuding/nextra/discussions/2167
 */
export function SourceCode(props: SourceCodeProps) {
  const lang = props.fileName?.substr(-3) ?? 'tsx';
  const {
    fileName,
    'data-theme': theme,
    title: title = `App.${lang}`,
    'data-line-numbers': showLineNumbers = true
  } = props;

  const sources = useData();

  if (!sources[fileName]) {
    return (
      <>
        <Pre>
          Example {fileName} not found. Did you add it to
          <code>getSourceCodeStaticProps</code>?
        </Pre>
      </>
    );
  }

  const html: string = sources[fileName]
    // Remove out HTML components we replace with nextra components
    .replaceAll('</code>', '')
    .replaceAll('<code>', '')
    .replace(/<pre [^>]*>/gi, '')
    .replace('</pre>', '')
    // For some reasons, when doing this empty lines are lost
    .replaceAll(
      '<span class="line"></span>',
      '<span class="line">\n</span>',
      'gi'
    );
  // Get the lines to highlight
  const linesToHighlight = props.highlightLines
    ? parseHighlightLines(props.highlightLines)
    : [];

  // Apply the 'highlighted' class to the required lines
  let lineCount = 0;
  const highlightedHtml = html.replace(/<span class="line">/g, (match) => {
    lineCount++;
    return linesToHighlight.includes(lineCount)
      ? '<span class="line highlighted">'
      : match;
  });

  let Example: () => JSX.Element = () => <></>;
  if (lang === 'tsx') {
    Example = (examples as Record<string, any>)[fileName.replace('.tsx', '')];
  }

  return (
    <div className="mt-6">
      <Pre data-theme={theme} data-language={lang} hasCopyCode filename={title}>
        <Code
          data-theme={theme}
          data-language={lang}
          data-line-numbers={showLineNumbers}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </Pre>
      {lang === 'tsx' && (
        <RenderingBox>
          <Example />
        </RenderingBox>
      )}
    </div>
  );
}
