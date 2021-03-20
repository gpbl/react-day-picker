import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ContextProvider } from 'contexts';

import { IconPrevious } from './IconPrevious';

let icon: Element;
let result: RenderResult;
describe('when rendered without props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconPrevious />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should render a svg element', () => {
    expect(icon.tagName).toBe('svg');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconPrevious className="foo" />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should add the class name', () => {
    expect(icon).toHaveClass('foo');
  });
});

describe('when using a style from props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconPrevious style={{ color: 'red' }} />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should apply the style', () => {
    expect(icon).toHaveStyle({ color: 'red' });
  });
});
