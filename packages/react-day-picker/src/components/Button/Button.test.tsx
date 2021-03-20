import * as React from 'react';

import { screen } from '@testing-library/react';

import { customRender } from 'test';

import { Button } from './Button';

let button: HTMLElement;

describe('when rendered without props', () => {
  beforeEach(() => {
    customRender(<Button />);
    button = screen.getByRole('button');
  });
  test('should render a button with type "button"', () => {
    expect(button).toHaveAttribute('type', 'button');
  });
  test('should render a button with the button class name', () => {
    expect(button).toHaveClass('rdp-button');
  });
  test('should render a button with the reset class name', () => {
    expect(button).toHaveClass('rdp-button_reset');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    customRender(<Button className="foo" />);
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button).toHaveClass('foo');
  });
});

describe('when using custom class names from ContextProvider props', () => {
  beforeEach(() => {
    customRender(<Button />, { classNames: { button: 'foo' } });
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button).toHaveClass('foo');
  });
});

describe('when using a inline style from props', () => {
  beforeEach(() => {
    customRender(<Button style={{ color: 'blue' }} />);
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button).toHaveStyle({ color: 'blue' });
  });
});

describe('when using a inline style from ContextProvider props', () => {
  beforeEach(() => {
    customRender(<Button />, { styles: { button: { color: 'blue' } } });
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button).toHaveStyle({ color: 'blue' });
  });
});
