import { labelPrevious } from './labelPrevious';

test('should return the label', () => {
  expect(labelPrevious()).toEqual('Previous month');
});
