import React from 'react';

import { PageObjects } from 'test/PageObjects';
import { customRender } from 'test/render';

import { Footer } from './Footer';

const po = new PageObjects(new Date());

test('should not render anything as default', () => {
  customRender(
    <table role="grid">
      <Footer />
    </table>
  );
  expect(po.footer).toBeNull();
});

describe('when using the `footer` prop', () => {
  beforeEach(() => {
    customRender(
      <table role="grid">
        <Footer />
      </table>,
      { footer: 'footer_foo' }
    );
  });
  test('should render the table footer', () => {
    expect(po.footer).toHaveTextContent('footer_foo');
  });
});
