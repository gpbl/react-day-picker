import { createContext } from 'react';

import type { MDXComponents } from 'mdx/types';
import { DayPicker } from 'react-day-picker';

import * as Examples from '@/examples';
import { Frontmatter } from '@/lib/docs.server';
import { Box, Card, Tabs, Text } from '@radix-ui/themes';

import { Description } from './Description';
import * as html from './html';
import { PreviewBox } from './PreviewBox';
import { PropsTable } from './PropsTable';
import { SectionTitle } from './SectionTitle';
import { Step, Steps } from './Steps';

export const mdxComponents: MDXComponents = {
  ...html,

  DayPicker,

  // All examples are available under `Examples` to consume in the docs
  Examples,

  // Custom components
  PreviewBox,
  PropsTable,
  Description,
  SectionTitle,
  Steps,
  Step,

  // Radix UI components
  Text,
  Card,
  Box,
  Tabs: Tabs.Root,
  TabsList: Tabs.List,
  TabsContent: Tabs.Content,
  TabsTrigger: Tabs.Trigger
};

export const FrontmatterContext = createContext<Frontmatter>({});
