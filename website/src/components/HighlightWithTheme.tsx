import React from "react";

import { usePrismTheme } from "@docusaurus/theme-common";
import { Highlight, HighlightProps } from "prism-react-renderer";

export function HighlightWithTheme(props: HighlightProps) {
  const prismTheme = usePrismTheme();
  return (
    <Highlight theme={prismTheme} {...props}>
      {({ className, style, tokens, getTokenProps }) => (
        <pre style={style} className={className}>
          {tokens.map((line, i) => {
            return line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ));
          })}
        </pre>
      )}
    </Highlight>
  );
}
