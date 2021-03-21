import * as React from 'react';

import { customRender, PageObjects } from 'test';
import { IconPrevious } from './IconPrevious';

const po = new PageObjects(new Date());

beforeEach(() => {
  customRender(<IconPrevious className="foo" style={{ color: 'red' }} />);
});
test('should render the icon', () => {
  expect(po.iconPrevious).toBeInTheDocument();
});
test('should add the class name', () => {
  expect(po.iconPrevious).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(po.iconPrevious).toHaveStyle({ color: 'red' });
});
