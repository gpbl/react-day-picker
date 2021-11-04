import * as React from 'react';

import tk from 'timekeeper';

import { customRender } from 'test';

import { useModifiers } from './useModifiers';

const today = new Date(2021, 8);

beforeEach(() => tk.freeze(today));
afterEach(() => tk.reset());

const TestComponent = ({ day }: { day: Date }) => {
  const modifiers = useModifiers(day);
  const isSelected = modifiers.modifiers.selected || false;

  return <button data-testid="test-div">{isSelected.toString()}</button>;
};

describe('uncontrolled date ranges', () => {
  test('should return selected as true based on defaultSelected', () => {
    const { getByTestId } = customRender(<TestComponent day={today} />, {
      mode: 'range',
      defaultSelected: { from: today, to: today }
    });
    expect(getByTestId('test-div')).toHaveTextContent('true');
  });

  test('should not be selected when nothing is selected', () => {
    const { getByTestId } = customRender(<TestComponent day={today} />, {
      mode: 'range',
      defaultSelected: undefined
    });
    expect(getByTestId('test-div')).toHaveTextContent('false');
  });
});
