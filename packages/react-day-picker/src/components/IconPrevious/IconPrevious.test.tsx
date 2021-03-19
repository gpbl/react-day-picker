import * as React from 'react';

import { RenderResult } from '@testing-library/react';

import { customRender } from 'test';
import { StyledComponentProps } from 'types';

import { IconPrevious } from './IconPrevious';

const setup = (props?: StyledComponentProps): RenderResult => {
  return customRender(<IconPrevious {...props} />);
};
test('should render correctly', () => {
  const { container } = setup({ className: 'foo', style: { color: 'red' } });
  expect(container.firstChild).toMatchSnapshot();
});
