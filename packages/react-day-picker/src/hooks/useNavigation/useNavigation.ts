import * as React from 'react';

import { NavigationContext, NavigationContextValue } from './NavigationContext';

/** Return the [[NavigationContext]] for handing the navigation. */
export function useNavigation(): NavigationContextValue {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
