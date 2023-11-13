import { Code, Pre } from 'nextra/components';
import { useData } from 'nextra/data';

import { parseHighlightLines } from './parseHighlightLines';

import * as examples from '@examples/index';

import { RenderingBox } from '@components/RenderingBox';

import type { Lang, Theme } from 'shiki';

type SourceCodeProps = {
  /**
   * The name of the file in the `docs/example` directory to render.
   * Must be added to to the static props via `getSrc`.
   */
  src: string;
  /**
   * Display a title in the source code block.
   * @defaultValue App.tsx
   */
  filename?: string;
  /**
   * Display the line numbers.
   * @defaultValue false
   */
  showLineNumbers?: boolean;
  /**
   * The line numbers to highlight e.g `highlightLines="1,3-4"`.
   **/
  highlightLines?: string;
  /**
   * Set the lang of the syntax highlighter. Inferred from the `src` extension.
   * @defaultValue tsx
   */
  lang?: Lang;
  /**
   * The shiki theme to apply.
   */
  theme?: Theme;
  /**
   * Displays a button to copy to code to the clipboard.
   */
  hasCopyCode?: boolean;
  /**
   * Skip the rendering of TSX examples.
   */
  skipRendering?: boolean;
};

/**
 * Render a code block with the source of `docs/example/${props.fileName}`,
 * highlighted using nextra code blocks. If the file is a component, it will
 * also render it.
 *
 * @see https://github.com/shuding/nextra/discussions/2167
 */
export function SourceCode(props: SourceCodeProps) {
  const lang = props.src?.substr(-3) ?? 'tsx';
  const {
    src,
    theme,
    filename = `App.${lang}`,
    showLineNumbers = true,
    hasCopyCode,
    skipRendering
  } = props;

  const sources = useData();

  if (!sources || !sources[src]) {
    return <Pre>Example "{src}" not found.</Pre>;
  }

  const html: string = sources[src]
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

  let Example;
  if (lang === 'tsx') {
    const exampleName = src.replace('.tsx', '') as keyof typeof examples;
    if (examples[exampleName]) {
      Example = examples[exampleName] as () => JSX.Element;
    }
  }

  return (
    <div className="mt-6">
      <Pre
        data-theme={theme}
        data-language={lang}
        hasCopyCode={hasCopyCode}
        filename={filename}
      >
        <Code
          data-theme={theme}
          data-language={lang}
          data-line-numbers={showLineNumbers}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </Pre>
      {Example && !skipRendering && (
        <RenderingBox>
          <Example />
        </RenderingBox>
      )}
    </div>
  );
}
