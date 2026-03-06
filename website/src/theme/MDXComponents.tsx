// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import type { ComponentProps, ComponentType } from "react";
import * as Examples from "react-day-picker/examples";

import * as ExamplesV8 from "../../examples-v8";
import * as ExamplesV9 from "../../examples-v9";
import { BrowserWindow } from "../components/BrowserWindow";

type TableComponent = ComponentType<ComponentProps<"table">>;

const Table: TableComponent =
  (MDXComponents as { table?: TableComponent }).table ??
  ((props) => <table {...props} />);

function ResponsiveTable(props: ComponentProps<typeof Table>) {
  return (
    <div className="table-scroll" role="presentation">
      <Table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: ResponsiveTable,
  BrowserWindow,
  Examples,
  ExamplesV8,
  ExamplesV9,
};
