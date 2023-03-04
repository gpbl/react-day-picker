import { defaultProps } from './defaultProps';

test('should match the snapshot', () => {
  expect(defaultProps).toMatchInlineSnapshot(`
    {
      "numberOfMonths": 1,
    }
  `);
});
