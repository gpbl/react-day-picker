import * as React from 'react';
import PropTypes from 'prop-types';

import * as DateFns from 'date-fns';
import spanish from 'date-fns/locale/es';
import arabic from 'date-fns/locale/ar-SA';

import { generateElement } from './utils';
import * as DayPicker from 'react-day-picker';

const buble = require('buble');
const transformOptions = {
  transforms: { moduleImport: false },
  objectAssign: 'Object.assign'
};

const errorCallback = (...args) => {
  console.error(args);
};

const scope = {
  ...DateFns,
  ...React,
  ...DayPicker,
  spanish,
  arabic
};
/**
 * Render the output of `code`.
 */
export function CodeOutput({ code }) {
  const { bubleCode = code } = buble.transform(
    code,
    transformOptions,
    errorCallback
  ).code;

  // Remove imports from the begin of the code as they are not required (they
  // are there just for displaying purpose)

  const transformedCode = bubleCode.replace(/^import.*$/gm, '');

  const Element = generateElement({
    code: transformedCode,
    scope
  });

  return (
    <div className="code-output">
      <div>
        <Element />
      </div>
    </div>
  );
}

CodeOutput.propTypes = {
  code: PropTypes.string.isRequired,
  height: PropTypes.number
};
