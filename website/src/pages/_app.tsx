/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/app/globals.css";
import "react-day-picker/style.css";
import "@radix-ui/themes/styles.css";

import Layout from "@/components/layout";

interface AppProps {
  Component: React.ComponentType & {
    getLayout?: (page: React.ReactNode, props: any) => React.ReactNode;
  };
  pageProps: any;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const getPageLayout = Component.getLayout ?? ((page) => page);
  return (
    <Layout>{getPageLayout(<Component {...pageProps} />, pageProps)}</Layout>
  );
}
