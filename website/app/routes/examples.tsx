import { ContainerAttributes } from '../../../examples/ContainerAttributes';
import { Controlled } from '../../../examples/Controlled';
import { DayPicker } from 'react-day-picker';

export default function Examples() {
  return (
    <main>
      <h1>Examples</h1>

      <h2 className="bg-inherit">Container Attributes</h2>
      <DayPicker />
      <ContainerAttributes />
      <Controlled />
    </main>
  );
}
