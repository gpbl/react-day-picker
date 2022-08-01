import { useContext } from 'react';

import { NavigationContext, NavigationContextValue } from './NavigationContext';

/** Hook to access the {@link NavigationContext}. */
export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
