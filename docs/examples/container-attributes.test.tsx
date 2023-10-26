import { axe, renderApp } from '../../test';
import { app } from '../../test/po';
import Example from './container-attributes';

beforeEach(() => {
  renderApp(<Example />);
});

test('should pass accessibility', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should have the specified id', () => {
  expect(app().firstChild).toHaveAttribute('id', 'testId');
});

test('should have the data set attribute', () => {
  expect(app().firstChild).toHaveAttribute('data-test', 'testData');
});
