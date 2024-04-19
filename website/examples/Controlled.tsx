import { useState } from "react";

import { Button, Flex } from "@radix-ui/themes";
import { addMonths, isSameMonth } from "date-fns";
import { DayPicker } from "react-day-picker";

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

  const footer = (
    <Flex justify="center" pt="4">
      <Button
        disabled={isSameMonth(today, month)}
        onClick={() => setMonth(today)}
      >
        Go to Today
      </Button>
    </Flex>
  );

  return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
}
