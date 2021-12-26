import { useContext } from 'react';

import {
  SelectMultipleContext,
  SelectMultipleContextValue
} from './SelectMultipleContext';

/** Hook to access the [[SelectMultipleContext]]. */
export function useSelectMultiple(): SelectMultipleContextValue {
  const context = useContext(SelectMultipleContext);
  if (!context) {
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider'
    );
  }
  return context;
}
