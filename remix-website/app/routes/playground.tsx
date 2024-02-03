import { useState } from "react";

import * as locales from "date-fns/locale";
import { DayPicker, type DayPickerProps, type Mode } from "react-day-picker";

import { PlaygroundDialog } from "@/components/PlaygroundDialog";
import { PropsForm } from "@/components/PlaygroundForm";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { MetaFunction } from "@remix-run/react";

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
  const [dayPickerProps, setDayPickerProps] =
    useState<DayPickerProps<Mode>>(initialProps);
  const [locale, setLocale] = useState<keyof typeof locales>("enUS");

  const handleChange = (propName: string, propValue: unknown) => {
    setDayPickerProps({ ...dayPickerProps, [propName]: propValue });
  };

  const handleLocaleChange = (locale: keyof typeof locales) => {
    setLocale(locale);
  };

  return (
    <Flex width="100%">
      <Flex m="9" width="100%" align="start" justify="center">
        <Box>
          <DayPicker
            {...dayPickerProps}
            locale={locales[locale] as locales.Locale}
          />
        </Box>
      </Flex>
      <PlaygroundDialog>
        <Heading size="5" mb="3">
          Playground
        </Heading>
        <PropsForm
          dayPickerProps={dayPickerProps}
          locale={locale}
          onChange={handleChange}
          onLocaleChange={handleLocaleChange}
        />
      </PlaygroundDialog>
    </Flex>
  );
}
