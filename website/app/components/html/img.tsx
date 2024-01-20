import { Box } from '@radix-ui/themes';

export function img(props: JSX.IntrinsicElements['img']) {
  return (
    <Box my="6">
      <img
        alt={props.alt}
        {...props}
        style={{
          maxWidth: '100%',
          verticalAlign: 'middle'
        }}
      />
    </Box>
  );
}
