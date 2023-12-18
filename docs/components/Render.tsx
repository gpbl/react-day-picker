import * as examples from '@examples/index';
import { ReactElement, useEffect, useState } from 'react';
import { RenderingBox } from './RenderingBox';
import { SourceCode } from './SourceCode';
import { useRouter } from 'next/router';
import { Shadow } from './Shadow';

export function Render() {
  const { query, push } = useRouter();
  const initialExample =
    'example' in query ? (query.example as keyof typeof examples) : undefined;

  const [selected, setSelected] = useState(initialExample);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push({ query: e.target.value ? { example: e.target.value } : {} });
    setSelected(e.target.value as keyof typeof examples);
  };

  useEffect(() => {
    if ('example' in query) {
      setSelected(query.example as keyof typeof examples);
    }
  }, [query]);

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
            onChange={handleSelectChange}
            className="nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current"
          >
            <option value="">Pick an example</option>
            {Object.keys(examples).map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <RenderingBox>
        {Example ? (
          <Shadow>
            <Example />
          </Shadow>
        ) : !selected ? (
          <p>Please pick an example first.</p>
        ) : (
          <pre>Example not found</pre>
        )}
      </RenderingBox>
      {selected && (
        <SourceCode hasCopyCode skipRendering src={`${selected}.tsx`} />
      )}
    </div>
  );
}
