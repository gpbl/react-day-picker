import { render } from '@testing-library/react';
import { DayPicker } from './DayPicker';

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="single" selected={new Date()} onSelect={() => {}} />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multi" selected={new Date()} />
      <DayPicker
        mode="multi"
        // @ts-expect-error Wrong `onSelect`
        onSelect={(date: Date) => console.log(date.getYear())}
      />
      {/** @ts-expect-error Missing required props */}
      <DayPicker mode="none" selected={new Date()} />
    </>
  );
};

it('should type-check', () => {
  render(<Test />);
  expect(true).toBeTruthy();
});
