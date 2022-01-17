import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { Dropdown, DropdownProps } from 'components/Dropdown';
import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { DayPickerProps } from 'types/DayPicker';

const today = new Date(2021, 8);

freezeBeforeAll(today);
function setup(props: DropdownProps, dayPickerProps?: DayPickerProps) {
  customRender(<Dropdown {...props} />, dayPickerProps);
}

const props: Required<DropdownProps> = {
  'aria-label': 'foo',
  onChange: jest.fn(),
  caption: 'Some caption',
  className: 'test',
  value: 'bar',
  children: <option value={'bar'} />,
  style: {}
};

let combobox: HTMLElement;
let label: HTMLElement;

beforeEach(() => {
  setup(props);
  combobox = screen.getByRole('combobox');
  label = screen.getByText(props['aria-label']);
});

test('should render the vhidden aria label', () => {
  expect(label).toHaveClass(defaultClassNames.vhidden);
});

test('should render the combobox', () => {
  expect(combobox).toBeInTheDocument();
});

describe('when the combobox changes', () => {
  beforeEach(() => {
    fireEvent.change(combobox);
  });
  test('should call the "onChange" eve, nt handler', () => {
    expect(props.onChange).toHaveBeenCalled();
  });
});

test('should render the combobox with the given value', () => {
  expect(combobox).toHaveValue(props.value);
});
