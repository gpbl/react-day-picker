import { useContext } from 'react';

import {
  SelectMultipleContext,
  SelectMultipleContextValue
} from './SelectMultipleContext';

/**
 * Hook to access the {@link SelectMultipleContextValue}.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useSelectMultiple(): SelectMultipleContextValue {
  const context = useContext(SelectMultipleContext);
  if (!context) {
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider'
    );
  }
  return context;
}
