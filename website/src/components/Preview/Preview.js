import * as React from 'react';
import PropTypes from 'prop-types';

import * as DateFns from 'date-fns';
import spanish from 'date-fns/locale/es';
import arabic from 'date-fns/locale/ar-SA';

import * as DayPicker from 'react-day-picker';

import { generateElement } from './utils';
import Frame from '../Frame';

// eslint-disable-next-line no-undef
const buble = require('buble');

const transformOptions = {
  transforms: { moduleImport: false },
  objectAssign: 'Object.assign',
};
const errorCallback = (...args) => {
  console.error(args);
};

/**
 * Live preview of `code`.
 */
export default function Preview({ code, height }) {
  const { _code = code } = buble.transform(
    code,
    transformOptions,
    errorCallback
  ).code;
  const transformedCode = _code.replace(/^import.*$/gm, '');

  const Element = generateElement({
    code: transformedCode,
    scope: { ...DateFns, ...React, ...DayPicker, spanish, arabic },
  });
  return (
    <Frame height={height}>
      <Element />
    </Frame>
  );
}

Preview.propTypes = {
  code: PropTypes.string.isRequired,
  height: PropTypes.number,
};
