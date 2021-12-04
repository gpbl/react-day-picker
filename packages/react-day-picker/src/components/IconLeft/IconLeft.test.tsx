import { customRender } from '@test/customRender';
import { PageObjects } from '@test/PageObjects';
import React from 'react';

import { IconLeft } from './IconLeft';

const po = new PageObjects(new Date());

beforeEach(() => {
  customRender(<IconLeft className="foo" style={{ color: 'red' }} />);
});
test('should render the icon', () => {
  expect(po.iconLeft).toBeInTheDocument();
});
test('should add the class name', () => {
  expect(po.iconLeft).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(po.iconLeft).toHaveStyle({ color: 'red' });
});
