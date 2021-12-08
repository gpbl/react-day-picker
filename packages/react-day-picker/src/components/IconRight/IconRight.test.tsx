import React from 'react';

import { customRender } from '@test/render';
import { IconRight } from './IconRight';
import { PageObjects } from '@test/po/PageObjects';

const po = new PageObjects(new Date());

beforeEach(() => {
  customRender(<IconRight className="foo" style={{ color: 'red' }} />);
});
test('should render the icon', () => {
  expect(po.iconRight).toBeInTheDocument();
});
test('should add the class name', () => {
  expect(po.iconRight).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(po.iconRight).toHaveStyle({ color: 'red' });
});
