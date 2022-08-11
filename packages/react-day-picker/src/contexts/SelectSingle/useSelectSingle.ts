import { useContext } from 'react';

import {
  SelectSingleContext,
  SelectSingleContextValue
} from './SelectSingleContext';

/**
 * Hook to access the {@link SelectSingleContextValue}.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useSelectSingle(): SelectSingleContextValue {
  const context = useContext(SelectSingleContext);
  if (!context) {
    throw new Error(
      'useSelectSingle must be used within a SelectSingleProvider'
    );
  }
  return context;
}
