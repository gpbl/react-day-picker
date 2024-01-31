import { Pre } from '@/components/Pre';
import {
  Flex,
  Heading,
  Text,
  Select,
  Checkbox,
  TextField,
  Box
} from '@radix-ui/themes';
import { DayPicker } from 'react-day-picker';

export default function Playground({ ...props }) {
  return (
    <Flex width="100%">
      <Flex m="9" width="100%">
        <Box>
          <DayPicker />
        </Box>
      </Flex>
      <Box
        className="m-6 min-w-[300px] max-w-[400px] p-4"
        style={{
          overflow: 'auto',
          boxShadow: '0 0 0 1px var(--slate-a5)',
          borderRadius: 'var(--radius-3)',
          backgroundColor: 'var(--slate-a2)'
        }}
      >
        <Heading size="5" mb="3">
          Playground
        </Heading>

        <form>
          <Flex gap="2" direction="column">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                Selection Mode
                <Select.Root defaultValue="single">
                  <Select.Trigger>Selection Mode: </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="single">Single</Select.Item>
                    <Select.Item value="multi">Multi</Select.Item>
                    <Select.Item value="none">Range</Select.Item>
                    <Select.Item value="none">None</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </Text>
            <Heading size="2" my="2">
              Calendar Options
            </Heading>
            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Outside Days
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Fixed Weeks
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Week Numbers
                </Flex>
              </Text>
            </Flex>
            <Heading size="2" my="2">
              Months Navigation
            </Heading>
            <Flex direction="column" gap="2">
              <Flex gap="2" align="center">
                <Text as="label" size="2">
                  Dropdowns
                </Text>
                <Select.Root defaultValue="off">
                  <Select.Trigger></Select.Trigger>
                  <Select.Content>
                    <Select.Item value="off">off</Select.Item>
                    <Select.Item value="true">months and years</Select.Item>
                    <Select.Item value="years">only years</Select.Item>
                    <Select.Item value="months">only months</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Disable Navigation
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Hide Navigation
                </Flex>
              </Text>
            </Flex>
            <Heading size="2" my="2">
              Multiple Months
            </Heading>
            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  Number of months:{' '}
                  <TextField.Input
                    type="number"
                    min={0}
                    max={12}
                    style={{ width: 60 }}
                  />
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> Reverse Navigation
                </Flex>
              </Text>
            </Flex>
            <Heading size="2" my="2">
              Localization
            </Heading>
            <Flex direction="column" gap="2">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox /> ISO Week
                </Flex>
              </Text>
              <Flex gap="2" align="center">
                <Text as="label" size="2">
                  Locale
                </Text>
                <Select.Root defaultValue="en">
                  <Select.Trigger></Select.Trigger>
                  <Select.Content>
                    <Select.Item value="en">English (default)</Select.Item>
                    <Select.Item value="es">Spanish</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
              <Flex gap="2" align="center">
                <Text as="label" size="2">
                  Week Starts On
                </Text>
                <Select.Root defaultValue="en">
                  <Select.Trigger></Select.Trigger>
                  <Select.Content>
                    <Select.Item value="en">monday</Select.Item>
                    <Select.Item value="es">tuesday</Select.Item>
                    <Select.Item value="es">wednesday</Select.Item>
                    <Select.Item value="es">thursday</Select.Item>
                    <Select.Item value="es">friday</Select.Item>
                    <Select.Item value="es">saturday</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
              <Flex gap="2" align="center">
                <Text as="label" size="2">
                  First Week Contains
                </Text>
                <Select.Root defaultValue="en">
                  <Select.Trigger></Select.Trigger>
                  <Select.Content>
                    <Select.Item value="en">monday</Select.Item>
                    <Select.Item value="es">tuesday</Select.Item>
                    <Select.Item value="es">wednesday</Select.Item>
                    <Select.Item value="es">thursday</Select.Item>
                    <Select.Item value="es">friday</Select.Item>
                    <Select.Item value="es">saturday</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </Flex>
            <Flex gap="2" align="center">
              <Text as="label" size="2">
                Text Direction
              </Text>
              <Select.Root defaultValue="none">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="none">none</Select.Item>
                  <Select.Item value="ltr">left-to-right</Select.Item>
                  <Select.Item value="rtl">right-to-left</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
        </form>
        <Box
          style={{
            overflow: 'auto',
            boxShadow: '0 0 0 1px var(--slate-a5)',
            borderRadius: 'var(--radius-3)',
            backgroundColor: 'var(--slate-a2)'
          }}
        >
          <Text asChild size="2">
            <pre>
              <code>{`
<DayPicker />          
          `}</code>
            </pre>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
