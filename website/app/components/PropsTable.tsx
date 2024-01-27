import React from 'react';

import type { DayPickerExports } from 'scripts';

import { RenderJsx } from '@/components/RenderJsx';
import { apiDefs } from '@/data/apiDefs';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { DividerHorizontalIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Code, Flex, IconButton, Popover, Table } from '@radix-ui/themes';
import { isInterfaceDef } from './isInterfaceDef';

export type PropDef = {
  name: string;
  required?: boolean;
  defaultValue?: string | boolean;
  type?: string;
  typeSimple: boolean;
  description?: string | React.ReactNode;
};

interface PropsTableProps {
  member: DayPickerExports;
  propHeaderFixedWidth?: boolean;
}

export function PropsTable(props: PropsTableProps) {
  const interfaceDef = apiDefs[props.member];

  if (!interfaceDef || !isInterfaceDef(interfaceDef)) {
    throw new Error(`Invalid API data for "${props.member}:`);
  }

  const properties = Object.values(interfaceDef.properties).sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'case' })
  );

  return (
    <>
      <Box my="5" asChild>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell
                style={{ width: props.propHeaderFixedWidth ? '37%' : 'auto' }}
              >
                Prop
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {properties.map((prop, i) => {
              return (
                <Table.Row
                  key={`${prop.name}-${i}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <Table.RowHeaderCell>
                    <Flex display="inline-flex" align="center" gap="2">
                      <Box>
                        <Code size="2">
                          {prop.name}
                          {prop.required ? '*' : null}
                        </Code>
                      </Box>
                      {prop.comment && (
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
                            <RenderJsx jsx={prop.commentJsx} />
                          </Popover.Content>
                        </Popover.Root>
                      )}
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Flex display="inline-flex" align="center" gap="2">
                      <Box>
                        <Code color="gray" size="2">
                          {/* {typeSimple ? typeSimple : type} */}
                        </Code>
                      </Box>
                      {/* {Boolean(typeSimple) && Boolean(type) && (
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
                        )} */}
                    </Flex>
                  </Table.Cell>

                  <Table.Cell>
                    {prop.defaultValue ? (
                      <Code size="2" color="gray">
                        {prop.defaultValue}
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
            })}
          </Table.Body>
        </Table.Root>
      </Box>
    </>
  );
}
