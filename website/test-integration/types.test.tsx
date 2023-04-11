/* eslint-disable no-console */
import React from 'react';

import { render } from '@testing-library/react';
import { DayPicker, DaySelectionMode } from 'react-day-picker';

/**
 * In this example we test the selection mode is correctly inferred from the mode prop.
 * If it does not, this file should throw a type error. See https://github.com/gpbl/react-day-picker/pull/1718
 */
function Example({ index }: { index: number }) {
  const modes: DaySelectionMode[] = ['single', 'multiple', 'range'];
  const selectedValues = [
    new Date(),
    [new Date()],
    { from: new Date(), to: new Date() }
  ];

  return (
    <DayPicker
      mode={modes[0]}
      selected={selectedValues[index]}
      onSelect={(selected) => console.log(selected)}
    />
  );
}

test('it should render', () => {
  const result = render(<Example index={0} />);
  expect(result).toBeDefined();
});
