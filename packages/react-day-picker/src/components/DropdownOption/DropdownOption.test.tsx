import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { Dropdown, DropdownProps } from 'components/Dropdown';
import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { CustomComponents } from 'types/DayPickerBase';

import { DropdownOption } from './DropdownOption';

const today = new Date(2021, 8);

freezeBeforeAll(today);

function setup(props: DropdownProps, dayPickerProps?: DayPickerProps) {
  customRender(<Dropdown {...props} />, dayPickerProps);
}

test('should match the snapshot', () => {
  const result = render(
    <DropdownOption date={today} value={7} label="label as prop" />
  );
  expect(result.container.firstChild).toMatchInlineSnapshot(`
    <option
      value="7"
    >
      label as prop
    </option>
  `);
});

describe('when rendered with children', () => {
  test('should match the snapshot', () => {
    const result = render(
      <DropdownOption date={today} value={7} label="label">
        label as children
      </DropdownOption>
    );
    expect(result.container.firstChild).toMatchInlineSnapshot(`
      <option
        value="7"
      >
        label as children
      </option>
    `);
  });
});
