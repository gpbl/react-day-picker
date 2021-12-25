import { useContext } from 'react';

import { Modifiers } from 'types/Modifiers';

import { ModifiersContext } from './ModifiersContext';

/** Hook to access the [[ModifiersContext]]. */
export function useModifiers(): Modifiers {
  const context = useContext(ModifiersContext);
  if (!context) {
    throw new Error('useModifiers must be used within a ModifiersProvider');
  }
  return context;
}
