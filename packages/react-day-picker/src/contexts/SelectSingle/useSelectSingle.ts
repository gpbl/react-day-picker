import { useContext } from 'react';

import {
  SelectSingleContext,
  SelectSingleContextValue
} from './SelectSingleContext';

/** Hook to access the [[SelectSingleContext]]. */
export function useSelectSingle(): SelectSingleContextValue {
  const context = useContext(SelectSingleContext);
  if (!context) {
    throw new Error(
      'useSelectSingle must be used within a SelectSingleProvider'
    );
  }
  return context;
}
