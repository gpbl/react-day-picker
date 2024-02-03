import * as locales from "date-fns/locale";
import { DayPickerProps, Mode } from "react-day-picker";

import {
  Checkbox,
  Flex,
  Heading,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";

export function PropsForm(props: {
  onChange: (propName: string, propValue: unknown) => void;
  onLocaleChange: (locale: keyof typeof locales) => void;
  dayPickerProps: DayPickerProps<Mode>;
  locale: string;
}) {
  const { onChange, onLocaleChange, locale } = props;
  const {
    showOutsideDays,
    showWeekNumber,
    fixedWeeks,
    dropdownNavigation,
    disableNavigation,
    hideNavigation,
    numberOfMonths,
    reverseMonths,
    pagedNavigation,
    ISOWeek,
    fromYear,
    toYear,
    weekStartsOn,
    firstWeekContainsDate,
  } = props.dayPickerProps;

  console.log("PlaygroundForm: formProps = ", props.dayPickerProps);
  return (
    <form>
      <Flex gap="2" direction="column">
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            Selection Mode
            <Select.Root
              defaultValue="single"
              onValueChange={(value) => {
                return onChange("mode", value);
              }}
            >
              <Select.Trigger>Selection Mode: </Select.Trigger>
              <Select.Content>
                <Select.Item value="single">Single</Select.Item>
                <Select.Item value="multi">Multi</Select.Item>
                <Select.Item value="range">Range</Select.Item>
                <Select.Item value="none">None</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Text>
        <Heading size="2" my="2">
          Calendar Options
        </Heading>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("showOutsideDays", !showOutsideDays)}
                checked={showOutsideDays}
              />
              Outside Days
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("fixedWeeks", !fixedWeeks)}
                checked={fixedWeeks}
              />
              Fixed Weeks
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("showWeekNumber", !showWeekNumber)}
                checked={showWeekNumber}
              />
              Week Number
            </Flex>
          </Text>
        </Flex>
        <Heading size="2" my="2">
          Months Navigation
        </Heading>
        <Flex direction="column" gap="2">
          <Flex gap="2" align="center">
            <Text as="label" size="2">
              Dropdowns
            </Text>
            <Select.Root
              defaultValue="off"
              value={dropdownNavigation?.toString()}
              onValueChange={(value) => {
                return onChange(
                  "dropdownNavigation",
                  value === "true" ? true : value === "off" ? false : value
                );
              }}
            >
              <Select.Trigger></Select.Trigger>
              <Select.Content>
                <Select.Item value="off">off</Select.Item>
                <Select.Item value="true">months and years</Select.Item>
                <Select.Item value="month">only months</Select.Item>
                <Select.Item value="year">only years</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() =>
                  onChange("disableNavigation", !disableNavigation)
                }
                checked={disableNavigation}
              />
              Disable Navigation
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("hideNavigation", !hideNavigation)}
                checked={hideNavigation}
              />
              Hide Navigation Buttons
            </Flex>
          </Text>
        </Flex>
        <Heading size="2" my="2">
          Multiple Months
        </Heading>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              Number of months:{" "}
              <TextField.Input
                onChange={(e) =>
                  onChange("numberOfMonths", Number(e.target.value))
                }
                type="number"
                min={0}
                max={24}
                style={{ width: 60 }}
                value={numberOfMonths || ""}
              />
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("pagedNavigation", !pagedNavigation)}
                checked={pagedNavigation}
              />
              Paged Navigation
            </Flex>
          </Text>

          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("reverseMonths", !reverseMonths)}
                checked={reverseMonths}
              />
              Reverse Months
            </Flex>
          </Text>
        </Flex>
        <Heading size="2" my="2">
          Localization
        </Heading>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                onClick={() => onChange("ISOWeek", !ISOWeek)}
                checked={ISOWeek}
              />
              ISO Week
            </Flex>
          </Text>
          <Flex gap="2" align="center">
            <Text as="label" size="2">
              Locale
            </Text>
            <Select.Root
              defaultValue="enUS"
              value={locale}
              onValueChange={(value) => {
                return onLocaleChange(value as keyof typeof locales);
              }}
            >
              <Select.Trigger></Select.Trigger>
              <Select.Content>
                {Object.keys(locales).map((localeKey) => {
                  const locale = locales[
                    localeKey as keyof typeof locales
                  ] as locales.Locale;
                  return (
                    <Select.Item key={locale.code} value={localeKey}>
                      {locale.code} {localeKey === "enUS" && " (default)"}
                    </Select.Item>
                  );
                })}
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex gap="2" align="center">
            <Text as="label" size="2">
              First Week Starts On
            </Text>
            <Select.Root defaultValue="enUS">
              <Select.Trigger></Select.Trigger>
              <Select.Content>
                <Select.Item value="monday">monday</Select.Item>
                <Select.Item value="tuesday">tuesday</Select.Item>
                <Select.Item value="wednesday">wednesday</Select.Item>
                <Select.Item value="thursday">thursday</Select.Item>
                <Select.Item value="friday">friday</Select.Item>
                <Select.Item value="saturday">saturday</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex gap="2" align="center">
            <Text as="label" size="2">
              First Week Contains
            </Text>
            <Select.Root defaultValue="en">
              <Select.Trigger></Select.Trigger>
              <Select.Content>
                <Select.Item value="monday">monday</Select.Item>
                <Select.Item value="tuesday">tuesday</Select.Item>
                <Select.Item value="wednesday">wednesday</Select.Item>
                <Select.Item value="thursday">thursday</Select.Item>
                <Select.Item value="friday">friday</Select.Item>
                <Select.Item value="saturday">saturday</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>
        <Flex gap="2" align="center">
          <Text as="label" size="2">
            Text Direction
          </Text>
          <Select.Root defaultValue="none">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="none">none</Select.Item>
              <Select.Item value="ltr">left-to-right</Select.Item>
              <Select.Item value="rtl">right-to-left</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Flex>
    </form>
  );
}
