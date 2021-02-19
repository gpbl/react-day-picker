import { ModifiersStatus } from './ModifiersStatus';

export interface SelectEventHandler {
  (day: Date | undefined, modifiers?: ModifiersStatus): void;
}
