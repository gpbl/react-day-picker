import React from 'react';

import { RenderResult } from '@testing-library/react';
import tk from 'timekeeper';

import { Caption, CaptionProps } from 'components';
import { customRender } from 'test';

const FrozenDate = new Date(2020, 5);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

const setup = (props?: CaptionProps): RenderResult => {
  return customRender(
    <Caption displayMonth={new Date()} displayIndex={1} {...props} />
  );
};

test('should render correctly', () => {
  const { container } = setup();
  expect(container.firstChild).toMatchSnapshot();
});

describe('when navigation is disabled', () => {
  test.todo('should display the caption label');
  test.todo('should not render the drop-downs');
  test.todo('should not render the navigation');
});

describe('when navigation is enabled', () => {
  describe('when the caption layout is "drop-down"', () => {
    test.todo('should apply the `caption_drop-downs` class name');
    test.todo('should apply the `caption_drop-downs` style');
    test.todo('should render the months drop-down');
    test.todo('should render the years drop-down');
    describe('when a month is selected from the month drop-down', () => {
      test.todo('should go to the selected month');
      test.todo('should cal the `onMonthChange` callback');
    });
    describe('when a year is selected from the year drop-down', () => {
      test.todo('should go to the selected month');
      test.todo('should cal the `onMonthChange` callback');
    });
  });
  describe('when the caption layout is "buttons"', () => {
    test.todo('should display the caption label');
    test.todo('should display the navigation');
    describe('when rendering multiple months', () => {
      describe('if is not the last month', () => {
        test.todo('should hide the next button');
      });
      describe('if is not the first month', () => {
        test.todo('should hide the previous button');
      });
    });
    describe('when clicking the previous button', () => {
      test.todo('should go to the previous month');
      test.todo('should call the `onMonthChange` callback');
      describe('if no previous month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
    });
    describe('when clicking the next button', () => {
      test.todo('should go to the next month');
      test.todo('should call the `onMonthChange` callback');
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
      describe('if no next month to navigate', () => {
        test.todo('should not change the month');
        test.todo('should not call the `onMonthChange` callback');
      });
    });
  });
});

tk.reset();
