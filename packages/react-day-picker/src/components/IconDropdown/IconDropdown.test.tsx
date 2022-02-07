import React from 'react';

import { customRender } from 'test/render';

import { IconDropdown } from './IconDropdown';

let root: HTMLElement;

beforeEach(() => {
  const renderResult = customRender(
    <IconDropdown className="foo" style={{ color: 'red' }} />
  );
  root = renderResult.container.firstChild as HTMLElement;
});
test('should add the class name', () => {
  expect(root).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(root).toHaveStyle({ color: 'red' });
});
