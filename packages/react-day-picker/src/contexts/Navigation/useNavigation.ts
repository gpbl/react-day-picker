import * as React from 'react';

import { NavigationContext, NavigationContextValue } from './NavigationContext';

/** Hook to access the [[NavigationContext]]. */
export function useNavigation(): NavigationContextValue {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
