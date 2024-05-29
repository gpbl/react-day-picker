import React from "react";

import { render } from "@testing-library/react";

import { DayPicker } from "./DayPicker";

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="single" selected={new Date()} onSelect={() => {}} />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multi" selected={new Date()} />
      <DayPicker
        mode="multiple"
        // @ts-expect-error Wrong `onSelect`
        // eslint-disable-next-line no-console
        onSelect={(date: Date) => console.log(date.getYear())}
      />
      <DayPicker />
      {/** @ts-expect-error Extra `selected` */}
      <DayPicker mode="default" selected={new Date()} />
      <DayPicker mode="default" />

      {/* <DayPicker
        mode="custom"
        modifiers={{ selected: new Date() }}
        onDayClick={() => console.log(1)}
      />
      <DayPicker
        mode="custom"
        // @ts-expect-error Extra `selected`
        selected={new Date()}
        onDayClick={() => console.log(1)}
      /> */}
      {/* <DayPicker mode="custom" selected={undefined} /> */}
      {/* <DayPicker mode="custom" onSelect={() => console.log(1)} /> */}
    </>
  );
};

it("should type-check", () => {
  render(<Test />);
  expect(true).toBeTruthy();
});
