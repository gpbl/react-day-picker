import { useContext } from 'react';

import { FocusContext, FocusContextValue } from './FocusContext';

/**
 * Hook to access the {@link FocusContextValue}. Use this hook to handle the
 * focus state of the elements.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useFocusContext(): FocusContextValue {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error('useFocusContext must be used within a FocusProvider');
  }
  return context;
}
