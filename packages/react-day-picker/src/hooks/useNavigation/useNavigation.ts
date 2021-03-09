import * as React from 'react';

import { NavigationContextValue } from 'types';

import { NavigationContext } from './NavigationContext';

/** Return the values for handing the navigation between months. */
export function useNavigation(currentMonth?: Date): NavigationContextValue {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
