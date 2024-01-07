import { screen } from '@testing-library/react';

import { renderApp } from '../test/renderApp';
import { Fixedweeks } from './Fixedweeks';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<Fixedweeks />);
});

test('should render 7 rows', () => {
  expect(screen.getAllByRole('row')).toHaveLength(7);
});
