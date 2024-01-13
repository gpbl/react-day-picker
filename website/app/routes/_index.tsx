import { DocsHeader } from '@/components/DocsHeader';
import { Page } from '@/components/Page';
import { Tab, Tabs } from '@/components/Tabs';
import { json, type MetaFunction } from '@remix-run/node';
import { Prose } from '@/components/Prose';
import { CodeBlock } from '@/components/CodeBlock';
import { useLoaderData } from '@remix-run/react';
import path from 'path';
import fs from 'fs';
import { Start } from '@examples/Start';
import { codeToHtml } from 'shikiji';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export async function loader() {
  const filePath = path.resolve('../examples/Start.tsx');
  const code = fs.readFileSync(filePath, 'utf-8');
  const html = await codeToHtml(code, {
    lang: 'javascript',
    theme: 'dark-plus'
  });
  return json({ code, html });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <Page>
      <DocsHeader
        section="Introduction"
        title="Welcome to React DayPicker"
        heading={
          <>
            DayPicker is a flexible date picker component for React. It’s easy
            to customize and style all aspects of the calendar component, and it
            includes a powerful API to make rendering custom content simple.
          </>
        }
      ></DocsHeader>
      <Prose>
        <h2>Getting started</h2>
        <CodeBlock language="shell">{`npm install react-day-picker date-fns`}</CodeBlock>
        <p>
          Install DayPicker from npm. It requires{' '}
          <a href="https://date-fns.org/">date-fns</a> as a peer dependency.
        </p>
        <CodeBlock language="shell">{`npm install react-day-picker date-fns`}</CodeBlock>
        <Tabs>
          <Tab label="Preview">
            <div className="p-3 relative rounded-md overflow-hidden ring-1 ring-slate-200">
              <Start />
            </div>
          </Tab>
          <Tab label="JavaScript">
            <div
              className="code-block"
              dangerouslySetInnerHTML={{ __html: data.html }}
            ></div>
          </Tab>
          <Tab label="TypeScript">
            <div
              className="code-block"
              dangerouslySetInnerHTML={{ __html: data.html }}
            ></div>
          </Tab>
        </Tabs>
      </Prose>
    </Page>
  );
}
