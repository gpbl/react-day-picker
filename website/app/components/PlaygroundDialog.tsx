import { type DayPickerProps, type Mode } from "react-day-picker";
import { Box, Heading } from "@radix-ui/themes";
import { PropsForm } from "./PlaygroundForm";

import * as locales from "date-fns/locale";

export function PlaygroundDialog(props: {
  locale: string;
  handleLocaleChange: (locale: keyof typeof locales) => void;
  handleChange: (propName: string, propValue: unknown) => void;
  formProps: DayPickerProps<Mode>;
}) {
  return (
    <Box
      className="m-6 min-w-[300px] max-w-[400px] p-4 sticky overflow-y-auto"
      style={{
        maxHeight: "calc(100vh - var(--header-height) - 3rem)",
        top: "calc(var(--header-height) + 1rem)",
        overflow: "auto",
        boxShadow: "0 0 0 1px var(--slate-a5)",
        borderRadius: "var(--radius-3)",
        backgroundColor: "var(--slate-a2)",
      }}
    >
      <Box>
        <Heading size="5" mb="3">
          Playground
        </Heading>
        <PropsForm
          locale={props.locale}
          onLocaleChange={props.handleLocaleChange}
          onChange={props.handleChange}
          dayPickerProps={props.formProps}
        />
      </Box>
    </Box>
  );
}
