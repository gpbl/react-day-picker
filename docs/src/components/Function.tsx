import React from 'react';

export interface Reflection {
  name: string;
}

export type FunctionProp = {
  reflection: Reflection;
};

export function Function(props: FunctionProp) {
  return <div>{<h2>{props.reflection.name}</h2>}</div>;
}
