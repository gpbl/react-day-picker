import * as React from 'react';

import { NavigationContext } from './NavigationContext';
import { NavigationContextValue } from './NavigationContextValue';

/** Hook to access the [[NavigationContext]]. */
export function useNavigation(): NavigationContextValue {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
