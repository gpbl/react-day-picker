import { useContext } from 'react';

import { NavigationContext, NavigationContextValue } from './NavigationContext';

/**
 * Hook to access the {@link NavigationContextValue}. Use this hook to navigate
 * between months or years in DayPicker.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
