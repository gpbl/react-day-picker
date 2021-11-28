import React from 'react';

import { clickDay, getTableFooter } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

import Example from './modifiers-today';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when the today date is clicked', () => {
  beforeEach(() => clickDay(today));
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'You clicked the today’s date'
    );
  });
});

describe('when another date is clicked', () => {
  const date = addDays(today, 1);
  beforeEach(() => clickDay(date));
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'Try clicking the today’s date.'
    );
  });
});
