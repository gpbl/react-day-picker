import * as React from 'react';

import tk from 'timekeeper';

import { customRender } from 'test';

import { useDay } from './useDay';
import { enUS } from 'date-fns/locale';

const today = new Date(2021, 8, 1);
const outsideDay = new Date(2021, 7, 31);

beforeEach(() => {
  tk.freeze(today);
  tk.freeze(outsideDay);
});
afterEach(() => tk.reset());

const IsOutsideTestComponent = ({
  date,
  displayMonth
}: {
  date: Date;
  displayMonth: Date;
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const day = useDay(date, displayMonth, buttonRef);
  const { isOutside } = day;
  return <button ref={buttonRef}>{isOutside.toString()}</button>;
};

describe('test props', () => {
  test('isOutside should be set to false for today (the first day of the month)', () => {
    const { getByRole } = customRender(
      <IsOutsideTestComponent date={today} displayMonth={today} />,
      {
        showOutsideDays: true,
        locale: enUS
      }
    );
    expect(getByRole('button')).toHaveTextContent('false');
  });
  test('isOutside should be set to true for a day outside the current month', () => {
    const { getByRole } = customRender(
      <IsOutsideTestComponent date={outsideDay} displayMonth={today} />,
      {
        showOutsideDays: true,
        locale: enUS
      }
    );
    expect(getByRole('button')).toHaveTextContent('true');
  });
});
