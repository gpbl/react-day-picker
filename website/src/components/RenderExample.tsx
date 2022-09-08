/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
import root from 'react-shadow';

const style: string = require(`!raw-loader!./shadow-dom-styles.css`).default;
const styleDark: string =
  require(`!raw-loader!./shadow-dom-styles-dark.css`).default;
const libStyle: string =
  require(`!raw-loader!react-day-picker/dist/style.css`).default;
const libStyleModule =
  require(`react-day-picker/dist/style.module.css`).default;

let libStyleModuleRaw: string =
  require(`!raw-loader!react-day-picker/dist/style.module.css`).default;
Object.entries(libStyleModule).map(([key, value]) => {
  const regExp = new RegExp(`\\.${key}([,: .])+`, 'g');
  libStyleModuleRaw = libStyleModuleRaw.replace(regExp, `.${value}$1`);
});

export function RenderExample(props: {
  name: string;
  rootStyle?: React.CSSProperties;
}) {
  const isDarkTheme = useColorMode().colorMode === 'dark';
  return (
    <BrowserOnly>
      {() => {
        try {
          require(`@site/examples/${props.name}`).default;
        } catch (e) {
          return <pre>{e.message}</pre>;
        }
        const Component = require(`@site/examples/${props.name}`).default;

        return (
          <root.div style={props.rootStyle}>
            <style type="text/css">{libStyle}</style>
            <style type="text/css">{libStyleModuleRaw}</style>
            <style type="text/css">{style}</style>
            <style type="text/css">{isDarkTheme && styleDark}</style>
            <Component />
          </root.div>
        );
      }}
    </BrowserOnly>
  );
}
