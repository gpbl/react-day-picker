import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { getPrevButton } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/multiple-months-paged';

const today = new Date(2021, 10, 25);
const user = userEvent.setup();
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when rendering November 2021', () => {
  test('should render 2 grids', () => {
    expect(screen.getAllByRole('grid')).toHaveLength(2);
  });
  test('the first grid should be November', () => {
    const grids = screen.getAllByRole('grid');
    expect(grids[0]).toHaveAccessibleName('November 2021');
  });
  test('the second grid should be December', () => {
    expect(screen.getAllByRole('grid')[1]).toHaveAccessibleName(
      'December 2021'
    );
  });
  // Test pagination
  describe('when the previous month button is clicked', () => {
    beforeEach(async () => user.click(getPrevButton()));
    test('the first month should be October', () => {
      const grids = screen.getAllByRole('grid');
      expect(grids[0]).toHaveAccessibleName('September 2021');
    });
    test('the month caption should be November', () => {
      const grids = screen.getAllByRole('grid');
      expect(grids[1]).toHaveAccessibleName('October 2021');
    });
  });
});
