import React from "react";
import Script from "next/script";

interface PreloaderProps {
  configs: {
    google: {
      enableLogin: boolean;
      strategy?: "afterInteractive" | "lazyOnload" | "beforeInteractive";
    };
  };
}

const Preloader: React.FC<PreloaderProps> = ({ configs, children }) => {
  console.log(configs.google.strategy);
  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy={configs.google.strategy}
        onLoad={() => console.log("loa!d")}
      />
      {children}
    </>
  );
};

export default Preloader;
