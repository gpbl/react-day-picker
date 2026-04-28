import React from "react";

import { DayPicker } from "../DayPicker";

import type { DayPickerProps } from "./props";
import type { DateRange, Matcher } from "./shared";

type PlainDateLike = {
  year: number;
  month: number;
  day: number;
  equals(other: unknown): boolean;
};

type DateLike = {
  getTime(): number;
  getFullYear(): number;
  getMonth(): number;
  getDate(): number;
};

const date = new Date(2024, 0, 15);
const month = new Date(2024, 0, 1);
const endMonth = new Date(2024, 11, 1);
const plainDateLike: PlainDateLike = {
  year: 2024,
  month: 1,
  day: 15,
  equals: () => true,
};
const dateLike: DateLike = {
  getTime: () => date.getTime(),
  getFullYear: () => date.getFullYear(),
  getMonth: () => date.getMonth(),
  getDate: () => date.getDate(),
};

const expectDate = (_date: Date) => {};
const expectDateRange = (_range: DateRange) => {};
const dateMatchers: Matcher[] = [
  date,
  [date],
  { from: date, to: date },
  { before: date },
  { after: date },
  { before: endMonth, after: month },
  { dayOfWeek: [0, 6] },
  (matchedDate: Date) => matchedDate.getDay() === 0,
];

const dateShapedProps: DayPickerProps = {
  today: date,
  month,
  defaultMonth: month,
  startMonth: month,
  endMonth,
  disabled: dateMatchers,
  hidden: dateMatchers,
  modifiers: {
    selected: date,
    booked: [date],
    range: { from: month, to: endMonth },
    before: { before: date },
    after: { after: date },
    interval: { before: endMonth, after: month },
    weekend: { dayOfWeek: [0, 6] },
  },
  onDayClick: (clickedDate) => {
    expectDate(clickedDate);
  },
  onMonthChange: (changedMonth) => {
    expectDate(changedMonth);
  },
  onNextClick: (nextMonth) => {
    expectDate(nextMonth);
  },
  onPrevClick: (previousMonth) => {
    expectDate(previousMonth);
  },
};

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker {...dateShapedProps} />
      <DayPicker mode="single" />
      <DayPicker
        mode="single"
        selected={undefined}
        onSelect={(selectedDate, triggerDate) => {
          if (selectedDate) expectDate(selectedDate);
          expectDate(triggerDate);
        }}
      />
      <DayPicker
        mode="single"
        selected={new Date()}
        onSelect={(selectedDate, triggerDate) => {
          if (selectedDate) expectDate(selectedDate);
          expectDate(triggerDate);
        }}
      />
      {/* @ts-expect-error Missing `selected` */}
      <DayPicker
        mode="single"
        required
        onSelect={(_date: Date | undefined) => {}}
      />
      {/* Allow undefined as initial selected value */}
      <DayPicker mode="single" required selected={undefined} />
      <DayPicker
        mode="multiple"
        required
        selected={undefined}
        onSelect={(selectedDates, triggerDate) => {
          selectedDates.forEach(expectDate);
          expectDate(triggerDate);
        }}
      />
      <DayPicker
        mode="range"
        required
        selected={undefined}
        onSelect={(selectedRange, triggerDate) => {
          expectDateRange(selectedRange);
          expectDate(triggerDate);
        }}
      />
      <DayPicker
        mode="multiple"
        required={false}
        selected={undefined}
        // @ts-expect-error Selected can be also undefined
        onSelect={(_selected: Date[], _date: Date, _modifiers) => {}}
      />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multiple" selected={new Date()} />
      <DayPicker mode="multiple" onSelect={(_date: Date[] | undefined) => {}} />
      <DayPicker
        mode="multiple"
        required
        selected={[]}
        onSelect={(_date: Date[]) => {}}
      />
      <DayPicker mode="single" selected={new Date()} />
      <DayPicker
        mode="range"
        selected={{ from: month, to: endMonth }}
        onSelect={(selectedRange, triggerDate) => {
          if (selectedRange?.from) expectDate(selectedRange.from);
          if (selectedRange?.to) expectDate(selectedRange.to);
          expectDate(triggerDate);
        }}
      />
      <DayPicker modifiers={{ selected: new Date() }} onDayClick={() => {}} />
      <DayPicker
        onSelect={() => {}}
        selected={new Date()}
        onDayClick={() => {}}
      />
      {/* @ts-expect-error Removed in v10: use `startMonth` */}
      <DayPicker fromMonth={new Date()} />
      {/* @ts-expect-error Removed in v10: use `endMonth` */}
      <DayPicker toYear={2030} />
      {/* @ts-expect-error Removed in v10: use `autoFocus` */}
      <DayPicker initialFocus />
      {/* @ts-expect-error Removed in v10: use custom `WeekNumber` component */}
      <DayPicker showWeekNumber onWeekNumberClick={() => {}} />
      {/* @ts-expect-error `today` must be a Date, not a PlainDate-like object */}
      <DayPicker today={plainDateLike} />
      {/* @ts-expect-error `month` must be a Date, not a Date-like object */}
      <DayPicker month={dateLike} />
      {/* @ts-expect-error `defaultMonth` must be a Date */}
      <DayPicker defaultMonth={plainDateLike} />
      {/* @ts-expect-error `startMonth` must be a Date */}
      <DayPicker startMonth={plainDateLike} />
      {/* @ts-expect-error `endMonth` must be a Date */}
      <DayPicker endMonth={plainDateLike} />
      {/* @ts-expect-error single selection is Date-shaped */}
      <DayPicker mode="single" selected={plainDateLike} />
      {/* @ts-expect-error multiple selection contains Date values */}
      <DayPicker mode="multiple" selected={[plainDateLike]} />
      {/* @ts-expect-error range endpoints must be Date values */}
      <DayPicker mode="range" selected={{ from: plainDateLike }} />
      {/* @ts-expect-error matchers must use Date values */}
      <DayPicker disabled={plainDateLike} />
      {/* @ts-expect-error matcher arrays must use Date values */}
      <DayPicker hidden={[plainDateLike]} />
      {/* @ts-expect-error modifier matchers must use Date values */}
      <DayPicker modifiers={{ selected: plainDateLike }} />
      <DayPicker
        // @ts-expect-error matcher callbacks receive Date values
        disabled={(_matchedDate: PlainDateLike) => true}
      />
      <DayPicker
        // @ts-expect-error onDayClick receives a Date
        onDayClick={(_clickedDate: PlainDateLike) => {}}
      />
      <DayPicker
        // @ts-expect-error onMonthChange receives a Date
        onMonthChange={(_changedMonth: PlainDateLike) => {}}
      />
      <DayPicker
        // @ts-expect-error onNextClick receives a Date
        onNextClick={(_nextMonth: PlainDateLike) => {}}
      />
      <DayPicker
        // @ts-expect-error onPrevClick receives a Date
        onPrevClick={(_previousMonth: PlainDateLike) => {}}
      />
      <DayPicker
        mode="single"
        // @ts-expect-error onSelect receives Date-shaped selection values
        onSelect={(_selectedDate: PlainDateLike) => {}}
      />
    </>
  );
};

it("should type-check", () => {
  expect(Test).toBeTruthy();
});
