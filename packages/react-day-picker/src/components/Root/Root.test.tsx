import React from 'react';

import { DayPickerProps } from 'types/DayPicker';

import { customRender } from 'test/render';

import { Root } from './Root';

function setup(dayPickerProps: DayPickerProps = {}) {
  customRender(<Root />, dayPickerProps);
}

describe('when the number of months is 1', () => {
  beforeEach(() => {
    setup();
  });
  test.todo('should display one month');
});

describe('when the number of months is greater than 1', () => {
  const dayPickerProps: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test.todo('should display three months');
});

describe('when using the custom "classNames" prop', () => {
  const dayPickerProps: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test.todo('should have the custom root class name');
});

describe('when using the "className" prop', () => {
  const dayPickerProps: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test.todo('should have the className to the root');
});

describe('when the "numberOfMonths" is greater than 1', () => {
  const dayPickerProps: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test.todo('should have the "multiple_month" class name');
});

describe('when showing the week numbers', () => {
  const dayPickerProps: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test.todo('should have the "with_weeknumber" class name');
});

describe('when "initialFocus" is set', () => {
  test.todo('should focus the focus target');
});
