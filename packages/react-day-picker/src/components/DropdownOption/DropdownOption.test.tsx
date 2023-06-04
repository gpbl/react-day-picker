import React from 'react';

import { render } from '@testing-library/react';

import { freezeBeforeAll } from 'test/utils';

import { DropdownOption } from './DropdownOption';

const today = new Date(2021, 8);

freezeBeforeAll(today);

test('should match the snapshot', () => {
  const result = render(
    <DropdownOption
      date={today}
      value={7}
      label="label as prop"
      type={'month'}
    />
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
      <DropdownOption date={today} value={7} label="label" type={'month'}>
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
