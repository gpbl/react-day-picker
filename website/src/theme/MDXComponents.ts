// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import * as ExamplesV8 from "../../examples";
import * as Examples from "../../examples-v9";
import { BrowserWindow } from "../components/BrowserWindow";

export default {
  ...MDXComponents,
  BrowserWindow,
  Examples,
  ExamplesV8
};
