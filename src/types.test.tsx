import React from "react";

import { DayPicker } from "./DayPicker";

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="default" />
      <DayPicker
        mode="single"
        selected={new Date()}
        onSelect={(date: Date | undefined) => {}}
      />
      <DayPicker
        mode="single"
        required={true}
        /* // @ts-expect-error Missing `selected` *. */
        selected={undefined}
        onSelect={(selected: Date, date: Date, modifiers) => {}}
      />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multi" selected={new Date()} />
      <DayPicker
        mode="multiple"
        // @ts-expect-error Wrong `onSelect`
        onSelect={(date: Date) => {}}
      />

      {/** @ts-expect-error Extra `selected` */}
      <DayPicker mode="default" selected={new Date()} />

      <DayPicker
        mode="default"
        modifiers={{ selected: new Date() }}
        onDayClick={() => {}}
      />
      <DayPicker
        mode="default"
        // @ts-expect-error Extra `selected`
        selected={new Date()}
        onDayClick={() => {}}
      />
      {/* <DayPicker mode="custom" selected={undefined} /> */}
      {/* <DayPicker mode="custom" onSelect={() => console.log(1)} /> */}
    </>
  );
};

it("should type-check", () => {
  expect(true).toBeTruthy();
});
