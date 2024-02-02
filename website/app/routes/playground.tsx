import { useState } from 'react';

import { DayPicker, type DayPickerProps, type Mode } from 'react-day-picker';

import { Box, Flex, Heading, Text } from '@radix-ui/themes';

import { PropsForm } from '../components/PlaygroundForm';
import * as locales from 'date-fns/locale';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = (arg) => {
  const title = 'Playground';
  const description = 'Play with the DayPicker props.';
  return [
    { title: title },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ];
};

export default function Playground() {
  const initialProps: DayPickerProps<Mode> = {
    showOutsideDays: false
  };
  const [formProps, setFormProps] =
    useState<DayPickerProps<Mode>>(initialProps);
  const [locale, setLocale] = useState<keyof typeof locales>('enUS');

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
      <Box
        className="m-6 min-w-[300px] max-w-[400px] p-4 sticky"
        style={{
          top: 'calc(var(--header-height) + 1rem)',
          overflow: 'auto',
          boxShadow: '0 0 0 1px var(--slate-a5)',
          borderRadius: 'var(--radius-3)',
          backgroundColor: 'var(--slate-a2)'
        }}
      >
        <Heading size="5" mb="3">
          Playground
        </Heading>

        <PropsForm
          locale={locale}
          onLocaleChange={handleLocaleChange}
          onChange={handleChange}
          dayPickerProps={formProps}
        />
        <Box
          style={{
            overflow: 'auto',
            boxShadow: '0 0 0 1px var(--slate-a5)',
            borderRadius: 'var(--radius-3)',
            backgroundColor: 'var(--slate-a2)'
          }}
        >
          <Text asChild size="2">
            <pre>
              <code>{`
<DayPicker />          
          `}</code>
            </pre>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
