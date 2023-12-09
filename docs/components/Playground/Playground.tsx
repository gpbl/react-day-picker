import {
  DayPicker,
  PropsBase,
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
  const [base, setBase] = useState<PropsBase>({});
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

  // const handleReset = () => {
  //   setMode('single');
  //   setBase({});
  //   setSingle({ mode: 'single' });
  //   setMulti({ mode: 'multi' });
  //   setRange({ mode: 'range' });
  // };
  return (
    <div>
      <h1 className="text-3xl my-4 font-bold">DayPicker Playground</h1>
      <div className="flex flex-row gap-4">
        <div className="nx-bg-primary-400/5 nx-mb-4 nx-rounded-xl dark:nx-bg-primary-200/10">
          {/* <button
            type="button"
            className="border rounded-md px-2 text-left text-xs font-medium mx-4"
            onClick={handleReset}
          >
            Reset Props
          </button> */}
          <PlaygroundForm
            base={base}
            single={single}
            multi={multi}
            range={range}
            onBaseChange={(key, value) => setBase({ ...base, [key]: value })}
            mode={'range'}
            onModeChange={setMode}
            onSingleChange={setSingle}
            onMultiChange={setMulti}
            onRangeChange={setRange}
          />
        </div>
        <div className="flex-1 nx-bg-primary-700/5 nx-mb-4 nx-rounded-xl dark:nx-bg-primary-200/10">
          <div
            className={`${renderClassName}`}
            style={{
              position: 'sticky',
              left: 0,
              right: 0,
              width: '100%',
              top: 'var(--nextra-navbar-height)'
            }}
          >
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
