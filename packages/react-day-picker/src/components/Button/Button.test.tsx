import { RenderResult } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';

import { Button } from 'components';

import { ButtonProps } from './ButtonProps';

const setup = (
  props?: ButtonProps & React.RefAttributes<HTMLButtonElement>
): RenderResult => {
  return customRender(<Button {...props} />);
};
test('should render correctly', () => {
  const { container } = setup();
  expect(container.firstChild).toMatchSnapshot();
});

test('should add the class name from props', () => {
  const { container } = setup({ className: 'foo' });
  expect(container.firstChild).toMatchSnapshot();
});

test('should add the inline style from props', () => {
  const { container } = setup({ style: { color: 'red' } });
  expect(container.firstChild).toMatchSnapshot();
});
