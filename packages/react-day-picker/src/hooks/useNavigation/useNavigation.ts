import React from 'react';

import { NavigationContext } from '../../components';
import { NavigationContextValue } from '../../types';

/**
 * Returns the Navigation context used for navigating between months and days.
 */
export function useNavigation(): NavigationContextValue {
  return React.useContext(NavigationContext);
}
