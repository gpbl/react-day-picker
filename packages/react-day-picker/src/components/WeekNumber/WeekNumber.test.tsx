import React from 'react';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render/customRender';

import { DayPickerBase } from 'types/DayPickerBase';

import { WeekNumber, WeekNumberProps } from './WeekNumber';

function setup(props: WeekNumberProps, dayPickerProps?: DayPickerProps) {
  return customRender(<WeekNumber {...props} />, dayPickerProps);
}

const props: WeekNumberProps = {
  number: 10,
  dates: [new Date(), new Date()]
};

describe('without "onWeekNumberClick" prop', () => {
  const dayPickerProps: DayPickerBase = { onWeekNumberClick: undefined };
  test('it should return a span element', () => {
    const { container } = setup(props, dayPickerProps);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('with "onWeekNumberClick" prop', () => {
  const dayPickerProps: DayPickerBase = { onWeekNumberClick: jest.fn() };
  const { container } = setup(props, dayPickerProps);
  test('it should return a button element', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  describe('when the button element is clicked', () => {
    userEvent.click(screen.getByRole('button'));
    test('should call onWeekNumberClick', () => {
      expect(dayPickerProps.onWeekNumberClick).toHaveBeenCalledWith(
        props.number,
        props.dates,
        expect.anything()
      );
    });
  });
});
