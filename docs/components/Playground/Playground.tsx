import {
  DayPicker,
  DayPickerBase,
  Mode,
  PropsMulti,
  PropsRange,
  PropsSingle
} from 'react-day-picker';

import { useState } from 'react';
import { RenderingBox } from '../RenderingBox';
import { Shadow } from '../Shadow';
import { PlaygroundForm } from './PlaygroundForm';

export function Playground() {
  const [mode, setMode] = useState<Mode>('single');
  const [base, setBase] = useState<DayPickerBase>({});
  const [single, setSingle] = useState<PropsSingle>({
    mode: 'single'
  });
  const [multi, setMulti] = useState<PropsMulti>({ mode: 'multi' });
  const [range, setRange] = useState<PropsRange>({ mode: 'range' });

  const renderClassName =
    base?.colorScheme === 'dark'
      ? 'bg-black text-white'
      : base?.colorScheme === 'light'
      ? 'bg-white text-black'
      : 'bg-transparent';

  const handleReset = () => {
    setMode('single');
    setBase({});
    setSingle({ mode: 'single' });
    setMulti({ mode: 'multi' });
    setRange({ mode: 'range' });
  };
  return (
    <div>
      <h1 className="text-3xl my-4 font-bold">Playground</h1>
      <hr className="border-neutral-500 my-4" />
      <div className="flex flex-col">
        {
          <div>
            <button
              type="button"
              className="border rounded-md px-2 text-left text-xs font-medium mx-4"
              onClick={handleReset}
            >
              Reset Props
            </button>
            <PlaygroundForm
              base={base}
              single={single}
              multi={multi}
              range={range}
              onBaseChange={(key, value) => setBase({ ...base, [key]: value })}
            />
          </div>
        }
        <div className="pb-36">
          <div className={`nxe-shadow-lg w-fit p-8 mx-auto ${renderClassName}`}>
            <RenderingBox>
              <Shadow mode="open">
                <DayPicker
                  {...base}
                  {...(mode === 'multi'
                    ? multi
                    : mode === 'range'
                    ? range
                    : mode === 'single'
                    ? single
                    : single)}
                />
              </Shadow>
            </RenderingBox>
          </div>
        </div>
      </div>
    </div>
  );
}
