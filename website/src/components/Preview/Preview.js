import * as React from 'react';
import PropTypes from 'prop-types';

import * as DateFns from 'date-fns';
import esLocale from 'date-fns/locale/es';
import arLocale from 'date-fns/locale/ar-SA';

import { DayPicker } from 'react-day-picker';

import { generateElement } from './utils';
import Frame from '../Frame';

// eslint-disable-next-line no-undef
const buble = require('buble');

const transformOptions = { transforms: { moduleImport: false } };
const errorCallback = (...args) => {
  console.error(args);
};

/**
 * Live preview of `code`
 */
export default function Preview({ code }) {
  let transformedCode = buble.transform(code, transformOptions, errorCallback)
    .code;
  transformedCode = transformedCode.replace(/^import.*$/gm, '');

  const Element = generateElement({
    code: transformedCode,
    scope: { ...DateFns, ...React, DayPicker, esLocale, arLocale },
  });

  return (
    <Frame>
      <Element />
    </Frame>
  );
}

Preview.propTypes = {
  code: PropTypes.string.isRequired,
};
