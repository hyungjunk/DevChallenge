import React from "react";
import Main from "../src/components/Main/Main";
import Layout from "../src/components/Layout";
import Side from "../src/components/Side/Side";
import AuthRequired from "../src/components/Auth/AuthRequired";
import { RootStoreProvider } from "../src/stores/storeContext";
import Preloader from "../src/components/Preloader";

// vendor 추가시 update
export type SupportVendors = "google";
type LoadStrategy = "afterInteractive" | "lazyOnload" | "beforeInteractive";

export type PreloadConfig = Record<
  SupportVendors,
  {
    src: string;
    strategy?: LoadStrategy;
    onload?: () => void;
  }
>;

function runPreloadCallback() {
  return () =>
    [
      () => console.log("script loaded1"),
      () => console.log("script loaded2"),
    ].forEach((cb) => cb());
}

const Home = () => {
  // strategy 따라 onLoad가 동작하지 않는이유?
  const preloadConfigs: PreloadConfig = {
    google: {
      src: "https://apis.google.com/js/platform.js",
      onload: runPreloadCallback,
    },
  };

  return (
    <>
      <Preloader configs={preloadConfigs} />
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
