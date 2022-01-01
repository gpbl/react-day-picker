import { useContext } from 'react';

import { FocusContext, FocusContextValue } from './FocusContext';

/** Hook to access the [[FocusContext]]. */
export function useFocusContext(): FocusContextValue {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}
