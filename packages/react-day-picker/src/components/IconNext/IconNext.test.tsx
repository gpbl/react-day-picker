import * as React from 'react';

import { customRender, PageObjects } from 'test';
import { IconNext } from './IconNext';

const po = new PageObjects(new Date());

beforeEach(() => {
  customRender(<IconNext className="foo" style={{ color: 'red' }} />);
});
test('should render the icon', () => {
  expect(po.iconNext).toBeInTheDocument();
});
test('should add the class name', () => {
  expect(po.iconNext).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(po.iconNext).toHaveStyle({ color: 'red' });
});
