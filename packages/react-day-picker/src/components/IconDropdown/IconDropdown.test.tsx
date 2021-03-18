import React from 'react';

import { render, screen } from '@testing-library/react';

import { ContextProvider as DayPicker } from 'contexts';

import { IconDropdown } from './IconDropdown';

let icon: HTMLElement;

describe('when rendered without props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <IconDropdown />
      </DayPicker>
    );
    icon = screen.getByRole('img');
  });
  test('should render a svg element', () => {
    expect(icon.tagName).toBe('svg');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <IconDropdown className="foo" />
      </DayPicker>
    );
    icon = screen.getByRole('img');
  });
  test('should add the class name', () => {
    expect(icon.classList).toContain('foo');
  });
});
