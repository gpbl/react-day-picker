import { fireEvent } from '@testing-library/dom';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import { getFocusedElement } from '../po';

export async function focusDaysGrid(user: UserEvent) {
  // Make sure nothing is focused
  await fireEvent.blur(getFocusedElement());
  // By pressing tab 3 times
  await user.tab();
  await user.tab();
  await user.tab();
}
