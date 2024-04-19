import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export function OutsideDays() {
  const [showOutsideDays, setShowOutsideDays] = useState(true);
  return (
    <Flex direction="column" align="center">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Checkbox
            data-accent-color
            variant="surface"
            onClick={() => setShowOutsideDays(!showOutsideDays)}
            checked={showOutsideDays}
          />
          Show Outside Days
        </Flex>
      </Text>
      <DayPicker showWeekNumber showOutsideDays={showOutsideDays} />
    </Flex>
  );
}
