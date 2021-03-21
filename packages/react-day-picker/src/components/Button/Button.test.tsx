import * as React from 'react';

import { customRender, PageObjects } from 'test';
import { Button } from './Button';

const po = new PageObjects(new Date());

describe('when rendered without props', () => {
  beforeEach(() => {
    customRender(<Button />);
  });
  test('should render a button with type "button"', () => {
    expect(po.button).toHaveAttribute('type', 'button');
  });
  test('should render a button with the button class name', () => {
    expect(po.button).toHaveClass('rdp-button');
  });
  test('should render a button with the reset class name', () => {
    expect(po.button).toHaveClass('rdp-button_reset');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    customRender(<Button className="foo" />);
  });
  test('should add the class name', () => {
    expect(po.button).toHaveClass('foo');
  });
});

describe('when using custom class names from ContextProvider props', () => {
  beforeEach(() => {
    customRender(<Button />, { classNames: { button: 'foo' } });
  });
  test('should add the class name', () => {
    expect(po.button).toHaveClass('foo');
  });
});

describe('when using a inline style from props', () => {
  beforeEach(() => {
    customRender(<Button style={{ color: 'blue' }} />);
  });
  test('should apply the style', () => {
    expect(po.button).toHaveStyle({ color: 'blue' });
  });
});

describe('when using a inline style from ContextProvider props', () => {
  beforeEach(() => {
    customRender(<Button />, { styles: { button: { color: 'blue' } } });
  });
  test('should apply the style', () => {
    expect(po.button).toHaveStyle({ color: 'blue' });
  });
});
