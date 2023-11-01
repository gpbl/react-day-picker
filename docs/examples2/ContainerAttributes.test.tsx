import { axe, renderApp } from '../../test';
import { app } from '../../test/po';
import { ContainerAttributes } from './ContainerAttributes';

beforeEach(() => {
  renderApp(<ContainerAttributes />);
});

test('should pass accessibility', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should have the "id" attribute', () => {
  expect(app().firstChild).toHaveAttribute('id', 'testId');
});

test('should have the "title" attribute', () => {
  expect(app().firstChild).toHaveAttribute('title', 'foo_title');
});

test('should have the "lang" attribute', () => {
  expect(app().firstChild).toHaveAttribute('lang', 'it');
});

test('should have the data set attribute', () => {
  expect(app().firstChild).toHaveAttribute('data-test', 'testData');
});
