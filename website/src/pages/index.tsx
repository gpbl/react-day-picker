import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/docs",
      permanent: false,
    },
  };
};

export default function Home() {
  return <></>;
}
