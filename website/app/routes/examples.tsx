import { ContainerAttributes } from '@examples/ContainerAttributes';
import * as examples from '@examples/index';

import { Controlled } from '@examples/Controlled';
import { DayPicker } from 'react-day-picker';

export default function Examples() {
  return (
    <main className="prose">
      <h1>Examples</h1>

      <h2 className="bg-inherit">Container Attributes</h2>
      <DayPicker />
      <ContainerAttributes />
      <Controlled />
      {Object.entries(examples).map(([name, Example]) => (
        <>
          <h1>{name}</h1>
          <Example />
        </>
      ))}
    </main>
  );
}
