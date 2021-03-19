import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { ContextProvider as DayPicker } from 'contexts';

import { Button } from './Button';

let button: HTMLElement;
describe('when rendered without props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <Button />
      </DayPicker>
    );
    button = screen.getByRole('button');
  });
  test('should render a button with type "button"', () => {
    expect(button).toHaveAttribute('type', 'button');
  });
  test('should render a button with the button class name', () => {
    expect(button.classList).toContain('rdp-button');
  });
  test('should render a button with the reset class name', () => {
    expect(button.classList).toContain('rdp-button_reset');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <Button className="foo" />
      </DayPicker>
    );
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button.classList).toContain('foo');
  });
});

describe('when using custom class names from DayPicker props', () => {
  beforeEach(() => {
    render(
      <DayPicker classNames={{ button: 'foo-from-props' }}>
        <Button />
      </DayPicker>
    );
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button.classList).toContain('foo-from-props');
  });
});

describe('when using a inline style from props', () => {
  beforeEach(() => {
    render(
      <DayPicker>
        <Button style={{ color: 'red' }} />
      </DayPicker>
    );
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button.style.color).toBe('red');
  });
});

describe('when using a inline style from DayPicker props', () => {
  beforeEach(() => {
    render(
      <DayPicker styles={{ button: { color: 'blue' } }}>
        <Button />
      </DayPicker>
    );
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button.style.color).toBe('blue');
  });
});
