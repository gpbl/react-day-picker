import React from 'react';

import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { DividerHorizontalIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import {
  Box,
  Code,
  Flex,
  IconButton,
  Inset,
  Popover,
  ScrollArea,
  Table,
  Text
} from '@radix-ui/themes';

export type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type?: string;
  typeSimple: string;
  description?: string | React.ReactNode;
};

export function PropsTable({
  data,
  propHeaderFixedWidth = true
}: {
  data: PropDef[];
  propHeaderFixedWidth?: boolean;
}) {
  return (
    <Box my="5" asChild>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell
              style={{ width: propHeaderFixedWidth ? '37%' : 'auto' }}
            >
              Prop
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(
            (
              {
                name,
                type,
                typeSimple,
                required,
                default: defaultValue,
                description
              },
              i
            ) => {
              return (
                <Table.Row
                  key={`${name}-${i}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <Table.RowHeaderCell>
                    <Flex display="inline-flex" align="center" gap="2">
                      <Box>
                        <Code size="2">
                          {name}
                          {required ? '*' : null}
                        </Code>
                      </Box>
                      {description && (
                        <Popover.Root>
                          <Popover.Trigger>
                            <IconButton variant="ghost" size="1" color="gray">
                              <AccessibleIcon label="Prop description">
                                <InfoCircledIcon />
                              </AccessibleIcon>
                            </IconButton>
                          </Popover.Trigger>
                          <Popover.Content
                            side="top"
                            align="center"
                            style={{ maxWidth: 350 }}
                            onOpenAutoFocus={(event) => {
                              event.preventDefault();
                              (event.currentTarget as HTMLElement)?.focus();
                            }}
                          >
                            <Text as="div" size="2">
                              {description}
                            </Text>
                          </Popover.Content>
                        </Popover.Root>
                      )}
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Flex display="inline-flex" align="center" gap="2">
                      <Box>
                        <Code color="gray" size="2">
                          {typeSimple ? typeSimple : type}
                        </Code>
                      </Box>
                      {Boolean(typeSimple) && Boolean(type) && (
                        <Popover.Root>
                          <Popover.Trigger>
                            <IconButton variant="ghost" color="gray" size="1">
                              <AccessibleIcon label="See full type">
                                <InfoCircledIcon />
                              </AccessibleIcon>
                            </IconButton>
                          </Popover.Trigger>
                          <Popover.Content
                            side="top"
                            align="center"
                            style={{ maxWidth: 'min(720px, 95vw)' }}
                          >
                            <Inset>
                              <ScrollArea type="auto">
                                <Box
                                  style={{ padding: 'var(--inset-padding)' }}
                                >
                                  <Code
                                    color="gray"
                                    variant="ghost"
                                    size="2"
                                    style={{
                                      whiteSpace: 'pre',
                                      display: 'block'
                                    }}
                                  >
                                    {type}
                                  </Code>
                                </Box>
                              </ScrollArea>
                            </Inset>
                          </Popover.Content>
                        </Popover.Root>
                      )}
                    </Flex>
                  </Table.Cell>

                  <Table.Cell>
                    {defaultValue ? (
                      <Code size="2" color="gray">
                        {defaultValue}
                      </Code>
                    ) : (
                      <AccessibleIcon label="No default value">
                        <DividerHorizontalIcon
                          style={{ color: 'var(--gray-8)' }}
                        />
                      </AccessibleIcon>
                    )}
                  </Table.Cell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
