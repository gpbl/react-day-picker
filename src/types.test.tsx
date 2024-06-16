import React from "react";

import { DayPicker } from "./DayPicker";

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="single" />
      <DayPicker
        mode="single"
        selected={undefined}
        onSelect={(date: Date | undefined) => {}}
      />
      <DayPicker
        mode="single"
        selected={new Date()}
        onSelect={(date: Date | undefined) => {}}
      />
      {/* @ts-expect-error Missing `selected` */}
      <DayPicker
        mode="single"
        required
        onSelect={(date: Date | undefined) => {}}
      />
      <DayPicker
        mode="multiple"
        required={true}
        // @ts-expect-error Missing `selected`
        selected={undefined}
        onSelect={(selected: Date[], date: Date, modifiers) => {}}
      />
      <DayPicker
        mode="multiple"
        required={false}
        selected={undefined}
        // @ts-expect-error Selected can be also undefined
        onSelect={(selected: Date[], date: Date, modifiers) => {}}
      />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multiple" selected={new Date()} />
      <DayPicker mode="multiple" onSelect={(date: Date[] | undefined) => {}} />
      <DayPicker
        mode="multiple"
        required
        selected={[]}
        onSelect={(date: Date[]) => {}}
      />
      <DayPicker mode="single" selected={new Date()} />
      <DayPicker modifiers={{ selected: new Date() }} onDayClick={() => {}} />
      <DayPicker
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
