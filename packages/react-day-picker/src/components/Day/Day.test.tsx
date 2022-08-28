import React from 'react';

import { screen } from '@testing-library/react';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { CustomComponents } from 'types/DayPickerBase';

import { Day, DayProps } from './Day';

const today = new Date(2021, 8);

freezeBeforeAll(today);
let container: HTMLElement;
function setup(props: DayProps, dayPickerProps?: DayPickerProps) {
  const view = customRender(<Day {...props} />, dayPickerProps);
  container = view.container;
}

const date = today;
const displayMonth = today;
const props: DayProps = {
  date: date,
  displayMonth
};

describe('when the day to render has an hidden modifier', () => {
  const dayPickerProps: DayPickerProps = {
    modifiers: { hidden: date }
  };
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render an empty element', () => {
    expect(container).toBeEmptyDOMElement();
  });
});
describe('when a no selection mode and no "onDayClick"', () => {
  const dayPickerProps: DayPickerProps = { mode: 'default' };
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render a div', () => {
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});

describe('when a selection mode is set', () => {
  const dayPickerProps: DayPickerProps = {
    mode: 'single'
  };
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render a button named "day"', () => {
    expect(container.firstChild?.nodeName).toBe('BUTTON');
    expect(container.firstChild).toHaveAttribute('name', 'day');
  });
});

describe('when "onDayClick" is present', () => {
  const dayPickerProps: DayPickerProps = {
    onDayClick: jest.fn()
  };
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render a button', () => {
    expect(container.firstChild?.nodeName).toBe('BUTTON');
  });
});

describe('when using a custom DayContent component', () => {
  const components: CustomComponents = {
    DayContent: () => <>Custom DayContent</>
  };
  beforeEach(() => {
    setup(props, { components });
  });
  test('it should render the custom component instead', () => {
    expect(screen.getByText('Custom DayContent')).toBeInTheDocument();
  });
});
