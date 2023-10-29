import { freezeTime, renderApp, rowheader } from '../../test';
import { WeeknumberCustom } from './WeeknumberCustom';

const today = new Date(2022, 0, 1);

freezeTime(today);

beforeEach(() => {
  renderApp(<WeeknumberCustom />);
});

test('should display the 53th week', () => {
  expect(rowheader('Week 53')).toBeInTheDocument();
});
