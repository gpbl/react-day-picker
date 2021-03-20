import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { ContextProvider } from 'contexts';

import { Button } from './Button';

let button: HTMLElement;

describe('when rendered without props', () => {
  beforeEach(() => {
    render(
      <ContextProvider>
        <Button />
      </ContextProvider>
    );
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
  const className = 'foo';
  beforeEach(() => {
    render(
      <ContextProvider>
        <Button className={className} />
      </ContextProvider>
    );
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button).toHaveClass(className);
  });
});

describe('when using custom class names from ContextProvider props', () => {
  const buttonClassName = 'foo-from-props';
  beforeEach(() => {
    render(
      <ContextProvider classNames={{ button: buttonClassName }}>
        <Button />
      </ContextProvider>
    );
    button = screen.getByRole('button');
  });
  test('should add the class name', () => {
    expect(button).toHaveClass(buttonClassName);
  });
});

describe('when using a inline style from props', () => {
  const buttonStyle = { color: 'blue' };
  beforeEach(() => {
    render(
      <ContextProvider>
        <Button style={buttonStyle} />
      </ContextProvider>
    );
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button).toHaveStyle(buttonStyle);
  });
});

describe('when using a inline style from ContextProvider props', () => {
  const buttonStyle = { color: 'blue' };
  beforeEach(() => {
    render(
      <ContextProvider styles={{ button: buttonStyle }}>
        <Button />
      </ContextProvider>
    );
    button = screen.getByRole('button');
  });
  test('should apply the style', () => {
    expect(button).toHaveStyle(buttonStyle);
  });
});
