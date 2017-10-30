/* eslint-disable global-require, import/no-unresolved, import/no-webpack-loader-syntax */
import React from 'react';
import { css } from 'glamor';

import Wrap from '../ui/Wrap';
import Grid from '../ui/Grid';
import GridColumn from '../ui/GridColumn';
import Code from '../ui/Code';

import examples from '../examples';
import { WIDE_SCREEN } from '../constants/mediaSelector';

const h3css = css({
  [WIDE_SCREEN]: { textAlign: 'right', marginTop: 15 },
});

export default function GettingStarted() {
  return (
    <Wrap>
      <h2 css={{ fontWeight: 300, textAlign: 'center' }}>Getting started</h2>
      <Grid>
        <GridColumn>
          <h3 css={h3css}>1. Install via npm or yarn</h3>
        </GridColumn>
        <GridColumn span={2}>
          <Code language="bash">
            {`$ npm install react-day-picker --save 
# or with yarn:
$ yarn add react-day-picker`}
          </Code>
          <div>
            <a href="https://www.npmjs.com/package/react-day-picker">
              <img
                src="https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square"
                alt="npm version"
              />
            </a>{' '}
            <a href="http://npm-stat.com/charts.html?package=react-day-picker">
              <img
                src="https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square"
                alt="npm downloads"
              />
            </a>{' '}
            <a href="https://circleci.com/gh/gpbl/react-day-picker">
              <img
                src="https://img.shields.io/circleci/project/github/gpbl/react-day-picker/master.svg?style=flat-square"
                alt="circleci"
              />
            </a>{' '}
            <a href="https://codecov.io/gh/gpbl/react-day-picker">
              <img
                src="https://img.shields.io/codecov/c/github/gpbl/react-day-picker/master.svg?style=flat-square"
                alt="npm downloads"
              />
            </a>
          </div>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn>
          <h3 css={h3css}>2. Import in your component</h3>
        </GridColumn>
        <GridColumn span={2}>
          <Code>{`${examples[0].examples[0].source}`}</Code>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn>
          <h3 css={h3css}>...or add it via unpkg</h3>
        </GridColumn>
        <GridColumn span={2}>
          <Code language="html">
            {`<head>
  <script src="https://unpkg.com/react-day-picker"></script>
  <link href="https://unpkg.com/react-day-picker/lib/style.css" rel="stylesheet">
</head>`}
          </Code>
        </GridColumn>
      </Grid>
    </Wrap>
  );
}
