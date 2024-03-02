import { PropsWithChildren } from "react";

type CodeBlockProps = PropsWithChildren<{
  preview?: React.ReactNode;
}>;
export function CodeBlock(props: CodeBlockProps) {
  return (
    <>
      {props.children}
      {/* {props.preview && (
        <Flex justify="center" mb="5">
          {props.preview}
        </Flex>
      )} */}
    </>
  );
}
