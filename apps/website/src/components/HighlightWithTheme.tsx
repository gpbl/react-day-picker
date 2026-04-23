/* biome-ignore-all lint/suspicious/noArrayIndexKey: not a concern */
import { usePrismTheme } from "@docusaurus/theme-common";
import { Highlight, type HighlightProps } from "prism-react-renderer";

export function HighlightWithTheme(props: Partial<HighlightProps>) {
  const prismTheme = usePrismTheme();
  return (
    <Highlight language="tsx" code="" theme={prismTheme} {...props}>
      {({ className, style, tokens, getTokenProps }) => (
        <pre style={style} className={className}>
          {tokens.map((line, i) => {
            return (
              <div key={i}>
                {line.map((token, key) => {
                  return <span key={key} {...getTokenProps({ token })} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
