// pages/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  frontMatter: {
    [key: string]: any;
  };
  Content: React.VFC;
}

export default function Post({ frontMatter, Content }: PostProps) {
  return (
    <>
      <h1>{frontMatter.title}</h1>
      <Content />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths of all MDX files here
};

export async function getStaticProps({ params }: Params) {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const Content = dynamic(() => import(`../../posts/${slug}.mdx`));

  return {
    props: {
      frontMatter: data,
      Content,
    },
  };
}
