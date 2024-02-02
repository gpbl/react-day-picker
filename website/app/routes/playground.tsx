import { useState } from "react";

import { DayPicker, type DayPickerProps, type Mode } from "react-day-picker";

import { Box, Flex, ScrollArea, Text } from "@radix-ui/themes";

import * as locales from "date-fns/locale";
import { MetaFunction } from "@remix-run/react";
import { PlaygroundDialog } from "../components/PlaygroundDialog";

export const meta: MetaFunction = (arg) => {
  const title = "Playground";
  const description = "Play with the DayPicker props.";
  return [
    { title: title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

export default function Playground() {
  const initialProps: DayPickerProps<Mode> = {
    showOutsideDays: false,
  };
  const [formProps, setFormProps] =
    useState<DayPickerProps<Mode>>(initialProps);
  const [locale, setLocale] = useState<keyof typeof locales>("enUS");

  const handleChange = (propName: string, propValue: any) => {
    setFormProps({ ...formProps, [propName]: propValue });
  };

  const handleLocaleChange = (locale: keyof typeof locales) => {
    setLocale(locale);
  };

  return (
    <Flex width="100%">
      <Flex m="9" width="100%" align="start" justify="center">
        <Box>
          <DayPicker
            {...formProps}
            locale={locales[locale] as locales.Locale}
          />
        </Box>
      </Flex>
      <PlaygroundDialog
        locale={locale}
        handleLocaleChange={handleLocaleChange}
        handleChange={handleChange}
        formProps={formProps}
      />
    </Flex>
  );
}
