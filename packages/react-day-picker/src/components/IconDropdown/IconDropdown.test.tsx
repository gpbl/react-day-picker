import { RenderResult } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';

import { StyledComponentProps } from 'types';

import { IconDropdown } from './IconDropdown';

const setup = (props?: StyledComponentProps): RenderResult => {
  return customRender(<IconDropdown {...props} />);
};
test('should render correctly', () => {
  const { container } = setup({ className: 'foo', style: { color: 'red' } });
  expect(container.firstChild).toMatchSnapshot();
});
