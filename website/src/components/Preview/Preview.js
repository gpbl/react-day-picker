import * as React from "react";
import PropTypes from "prop-types";

import * as DateFns from "date-fns";
import spanish from "date-fns/locale/es";
import arabic from "date-fns/locale/ar-SA";

import { generateElement } from "./utils";
import Frame from "../Frame";
import * as DayPicker from "react-day-picker";

const buble = require("buble");
const transformOptions = {
  transforms: { moduleImport: false },
  objectAssign: "Object.assign"
};

const errorCallback = (...args) => {
  console.error(args);
};

/**
 * Live preview of `code`.
 */
export function Preview({ code, height }) {
  const { bubleCode = code } = buble.transform(
    code,
    transformOptions,
    errorCallback
  ).code;
  const transformedCode = bubleCode.replace(/^import.*$/gm, "");
  // return <p>{transformedCode}</p>;
  const scope = {
    ...DateFns,
    ...React,
    ...DayPicker,
    spanish,
    arabic
  };
  const Element = generateElement({
    code: transformedCode,
    scope
  });
  return (
    <Frame height={height}>
      <Element />
    </Frame>
  );
}

Preview.propTypes = {
  code: PropTypes.string.isRequired,
  height: PropTypes.number
};
