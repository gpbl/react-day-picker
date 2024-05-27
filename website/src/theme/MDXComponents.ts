// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import * as Examples from "../../examples";
import * as ExamplesV8 from "../../examples-v8";
import { BrowserWindow } from "../components/BrowserWindow";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  BrowserWindow,
  Examples,
  ExamplesV8
};
