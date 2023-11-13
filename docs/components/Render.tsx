import * as examples from '@examples/index';
import { ReactElement, useState } from 'react';
import { RenderingBox } from './RenderingBox';
import { SourceCode } from './SourceCode';

export function Render() {
  const [selected, setSelected] = useState<keyof typeof examples>();

  let Example;
  if (selected && examples[selected]) {
    Example = examples[selected] as () => ReactElement;
  }
  return (
    <div>
      <form className="py-5">
        <label>
          <select
            name="example-name"
            value={selected}
            onChange={(e) =>
              setSelected(e.target.value as keyof typeof examples)
            }
            className="nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current"
          >
            <option value="">Pick an example</option>
            {Object.keys(examples).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
      </form>
      <RenderingBox>
        {Example ? (
          <Example />
        ) : !selected ? (
          <p>Please pick an example first.</p>
        ) : (
          <pre>Example not found</pre>
        )}
      </RenderingBox>
      {selected && <SourceCode skipRendering src={`${selected}.tsx`} />}
    </div>
  );
}
