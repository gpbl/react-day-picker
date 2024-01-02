import 'react-day-picker/dist/style.css';
import './global.css';
import '@/styles/tailwind.css';

import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'DayPicker - a date picker component for React.'
  },
  description:
    'DayPicker is a flexible date picker component for React. It supports internationalization, accessibility, keyboard navigation, and more.'
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
