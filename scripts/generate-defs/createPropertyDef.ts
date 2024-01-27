import { type PropertySignature } from 'ts-morph';

import { createJsDocDef, type JSDocDef } from './createJsDocDef.ts';
import { createNodeDef, type NodeDef } from './createNodeDef.ts';
import { getDefaultValue } from './utils/getDefaultValue.ts';

export interface PropertyDef extends NodeDef, JSDocDef {
  defaultValue?: string | boolean | undefined;
  required: boolean;
}
export async function createPropertyDef(property: PropertySignature) {
  const required = !property.hasQuestionToken();

  const node = await createNodeDef(property);

  const jsdocDef = await createJsDocDef(property);
  // const typeNodeDef = await createTypedNodeDef(property);

  const defaultValue = getDefaultValue(property);

  const propertyDef: PropertyDef = {
    ...node,
    ...jsdocDef,
    required,
    defaultValue
  };

  return propertyDef;
}
