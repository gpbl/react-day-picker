import React from 'react';

import { customRender, PageObjects } from '../../test';

import { Button } from './Button';

const po = new PageObjects(new Date());

describe('when rendered without props', () => {
  beforeEach(() => {
    customRender(<Button className="foo" style={{ color: 'blue' }} />);
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
  test('should add the class name', () => {
    expect(po.button).toHaveClass('foo');
  });
  test('should apply the style', () => {
    expect(po.button).toHaveStyle({ color: 'blue' });
  });
});

describe('when using class names and styles from context', () => {
  beforeEach(() => {
    customRender(<Button />, {
      classNames: { button: 'foo' },
      styles: { button: { color: 'red' } }
    });
  });
  test('should apply the style', () => {
    expect(po.button).toHaveStyle({ color: 'red' });
  });
  test('should apply the class name', () => {
    expect(po.button).toHaveClass('foo');
  });
});
