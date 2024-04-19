import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export function FixedWeeks() {
  const [fixedWeeks, setFixedWeeks] = useState(true);
  return (
    <Flex direction="column" align="center">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Checkbox
            data-accent-color
            variant="surface"
            onClick={() => setFixedWeeks(!fixedWeeks)}
            checked={fixedWeeks}
          />
          Toggle Fixed Weeks
        </Flex>
      </Text>
      <DayPicker
        defaultMonth={new Date(2025, 8)}
        showWeekNumber
        showOutsideDays
        fixedWeeks={fixedWeeks}
      />
    </Flex>
  );
}
