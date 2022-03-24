import React from 'react';

import { screen } from '@testing-library/react';

import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { CustomComponents, DayPickerBase } from 'types/DayPickerBase';

import { Day, DayProps } from './Day';

const today = new Date(2021, 8);

freezeBeforeAll(today);
let container: HTMLElement;
function setup(props: DayProps, dayPickerProps?: DayPickerBase) {
  const result = customRender(<Day {...props} />, dayPickerProps);
  container = result.container;
}

const date = today;
const displayMonth = today;
const props: DayProps = {
  date: date,
  displayMonth
};

describe('when the day to render has an hidden modifier', () => {
  const dayPickerProps: DayPickerBase = {
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
  const dayPickerProps: DayPickerBase = {};
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render a div', () => {
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});

describe('when a selection mode is set', () => {
  const dayPickerProps: DayPickerBase = {
    mode: 'single'
  };
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should render a button', () => {
    expect(container.firstChild?.nodeName).toBe('BUTTON');
  });
});

describe('when "onDayClick" is present', () => {
  const dayPickerProps: DayPickerBase = {
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
