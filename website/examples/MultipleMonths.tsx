import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export function MultipleMonths() {
  const [numberOfMonths, setNumberOfMonths] = useState(2);
  return (
    <Flex direction="column" align="center">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          Number of months:{" "}
          <TextField.Input
            onChange={(e) => {
              const n = Number(e.target.value);
              if (n <= 0 || n > 24) return;
              setNumberOfMonths(Number(e.target.value));
            }}
            type="number"
            min={0}
            max={24}
            style={{ width: 60 }}
            value={numberOfMonths || ""}
          />
        </Flex>
      </Text>
      <Box className="max-w-full flex-wrap overflow-auto" s>
        <DayPicker
          numberOfMonths={numberOfMonths}
          className="max-w-full flex-wrap overflow-auto"
        />
      </Box>
    </Flex>
  );
}
