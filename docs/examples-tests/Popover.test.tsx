import { format } from 'date-fns';

import { Popover } from '../examples/Popover';
import { screen } from '@testing-library/react';

import { gridcell, renderApp, user } from '../../test';

const today = new Date(2022, 5, 10);
function pickButton() {
  return screen.getByRole('button', { name: 'Pick a Date' });
}

function input() {
  return screen.getByRole('textbox');
}

describe.skip('when clicking "Pick a Date"', () => {
  test('the dialog should be visible', async () => {
    renderApp(<Popover />);
    await user.click(pickButton());
    expect(screen.getByRole('dialog')).toBeVisible();
  });
  test('the today button should have focus', async () => {
    renderApp(<Popover />);
    await user.click(pickButton());
    expect(gridcell(today)).toHaveFocus();
  });
});

describe.skip('when clicking a day', () => {
  test('the dialog should be closed', async () => {
    renderApp(<Popover />);
    await user.click(pickButton());
    await user.click(gridcell(today));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  test('the input should have the selected date as value', async () => {
    renderApp(<Popover />);
    await user.click(pickButton());
    await user.click(gridcell(today));
    expect(input()).toHaveValue(format(today, 'y-MM-dd'));
  });
});
