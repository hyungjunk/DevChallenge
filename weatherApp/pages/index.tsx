import Main from "../src/components/Main/Main";
import Layout from "../src/components/Layout";
import Side from "../src/components/Side/Side";
import AuthRequired from "../src/components/Auth/AuthRequired";
import { RootStoreProvider } from "../src/stores/storeContext";
import Preloader from "../src/components/Preloader";
import Script from "next/script";
import React from "react";

const Home = () => {
  const preloadConfig = {
    // strategy 따라 onLoad가 동작하지 않는이유?
    google: { enableLogin: true, strategy: "afterInteractive" as const },
  };

  return (
    <>
      <Preloader configs={preloadConfig} />
      <RootStoreProvider>
        <AuthRequired>
          <Layout>
            <Side />
            <Main />
          </Layout>
        </AuthRequired>
      </RootStoreProvider>
    </>
  );
};

export async function getServerSideProps({ preview = false }) {
  console.log("getServerSideProps");
  return {
    props: { foo: "bar" },
  };
}

export default Home;
