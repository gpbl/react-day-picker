import React from 'react';

import type { DayPickerExports, InterfaceDef } from 'scripts';

import { RenderJsx } from '@/components/RenderJsx';
import { apiDefs } from '@/data/apiDefs';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { DividerHorizontalIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import {
  Box,
  Code,
  Flex,
  Text,
  Heading,
  IconButton,
  Popover,
  Table
} from '@radix-ui/themes';
import { isInterfaceDef } from './isInterfaceDef';

interface PropsListProps {
  member: DayPickerExports;
  topic?: string;
}

export function PropsList(props: PropsListProps) {
  const interfaceDef = apiDefs[props.member];

  if (!interfaceDef || !isInterfaceDef(interfaceDef)) {
    throw new Error(`Invalid API data for "${props.member}:`);
  }

  const properties = Object.values(interfaceDef.properties)
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'case' })
    )
    .filter((property) => {
      if (!props.topic) return true;
      return property.topic === props.topic;
    });

  return (
    <>
      {properties.map((prop, i) => {
        return (
          <Box key={prop.name}>
            <Heading size="4">
              <Code>
                {prop.name}
                {prop.required ? '*' : null}
              </Code>
              :{' '}
              <Code weight="regular" style={{ backgroundColor: 'transparent' }}>
                {prop.typeDef}
              </Code>
            </Heading>
            <Box ml="6" mt="2">
              <RenderJsx jsx={prop.shortCommentJsx} />
            </Box>
            {prop.required && <Text>Required.</Text>}
          </Box>
        );
      })}
    </>
  );
}
