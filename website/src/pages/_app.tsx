import "@/app/globals.css";
import "react-day-picker/style.css";
import "@radix-ui/themes/styles.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "@/components/layout";
import { usePathname } from "next/navigation";

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  const pathName = usePathname() ?? "/";

  return (
    <Layout
      isDocPage={
        pathName === "/" ||
        pathName.startsWith("/docs") ||
        pathName.startsWith("/v8")
      }
    >
      <Component {...pageProps} />
    </Layout>
  );
}
