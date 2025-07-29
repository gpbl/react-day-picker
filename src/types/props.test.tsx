import React from "react";

import { DayPicker } from "../DayPicker";

import type { DateRange } from "./shared";

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="single" />
      <DayPicker
        mode="single"
        selected={undefined}
        onSelect={(_date: Date | undefined) => {}}
      />
      <DayPicker
        mode="single"
        selected={new Date()}
        onSelect={(_date: Date | undefined) => {}}
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
        onSelect={(_selected: Date[], _date: Date, _modifiers) => {}}
      />
      <DayPicker
        mode="range"
        required
        selected={undefined}
        onSelect={(_selected: DateRange, _date: Date, _modifiers) => {}}
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
      <DayPicker modifiers={{ selected: new Date() }} onDayClick={() => {}} />
      <DayPicker
        onSelect={() => {}}
        selected={new Date()}
        onDayClick={() => {}}
      />
    </>
  );
};

it("should type-check", () => {
  expect(Test).toBeTruthy();
});
