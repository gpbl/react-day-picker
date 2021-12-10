import React from 'react';

import { PageObjects } from 'test/po/PageObjects';
import { customRender } from 'test/render';

import { IconDropdown } from './IconDropdown';

const po = new PageObjects(new Date());

beforeEach(() => {
  customRender(<IconDropdown className="foo" style={{ color: 'red' }} />);
});
test('should render the icon', () => {
  expect(po.iconDropdown).toBeInTheDocument();
});
test('should add the class name', () => {
  expect(po.iconDropdown).toHaveClass('foo');
});
test('should apply the style', () => {
  expect(po.iconDropdown).toHaveStyle({ color: 'red' });
});
