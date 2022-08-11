/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import root from 'react-shadow';

export function RenderExample(props: {
  name: string;
  rootStyle?: React.CSSProperties;
}) {
  return (
    <BrowserOnly>
      {() => {
        try {
          require(`@site/examples/${props.name}`).default;
        } catch (e) {
          return <pre>{e.message}</pre>;
        }
        const Component = require(`@site/examples/${props.name}`).default;
        const libStyle =
          require(`!raw-loader!react-day-picker/dist/style.css`).default;
        const style = require(`!raw-loader!./shadow-dom-styles.css`).default;

        return (
          <root.div style={props.rootStyle}>
            <style type="text/css">{libStyle}</style>
            <style type="text/css">{style}</style>
            <Component />
          </root.div>
        );
      }}
    </BrowserOnly>
  );
}
