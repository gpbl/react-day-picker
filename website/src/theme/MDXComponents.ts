// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import * as ExamplesV8 from "../../examples";
import * as Examples from "../../examples-v9";
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
