import "@/app/globals.css";
import "react-day-picker/style.css";
import "@radix-ui/themes/styles.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "@/components/layout";
import { getAllFrontmatter } from "@/lib/mdx";

export async function getStaticProps() {
  return {
    props: {
      title: "test",
      description: "xxx",
      allFrontmatters: getAllFrontmatter(),
    },
  };
}

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any> & {
    getLayout?: (page: React.ReactNode, props: any) => React.ReactNode;
  };
  pageProps: any;
}) {
  const getPageLayout = Component.getLayout ?? ((page) => page);
  return (
    <Layout>{getPageLayout(<Component {...pageProps} />, pageProps)}</Layout>
  );
}
