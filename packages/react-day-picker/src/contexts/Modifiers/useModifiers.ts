import { useContext } from 'react';

import { Modifiers } from 'types/Modifiers';

import { ModifiersContext } from './ModifiersContext';

/**
 * Return the modifiers used by DayPicker.
 *
 * This hook is meant to be used inside internal or custom components.
 * Requires to be wrapped into {@link ModifiersProvider}.
 *
 */
export function useModifiers(): Modifiers {
  const context = useContext(ModifiersContext);
  if (!context) {
    throw new Error('useModifiers must be used within a ModifiersProvider');
  }
  return context;
}
