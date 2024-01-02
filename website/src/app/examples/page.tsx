import { Metadata } from 'next';

import exampleJSON from './examples.json';
import { QuickLink, QuickLinks } from '@/components/QuickLinks';

export const metadata: Metadata = {
  title: 'Examples'
};

export default function Page() {
  return (
    <>
      <p className="lead">
        Learn DayPicker by exploring this extensive list of examples.
      </p>
      <QuickLinks>
        {exampleJSON.map((example) => (
          <QuickLink
            key={example.name}
            title={example.title}
            description={example.text}
            href={`examples/${example.name}`}
          />
        ))}
      </QuickLinks>
    </>
  );
}
