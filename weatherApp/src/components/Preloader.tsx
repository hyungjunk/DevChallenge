import React from "react";
import Script from "next/script";
import { PreloadConfig, SupportVendors } from "../../pages";

interface PreloaderProps {
  configs: PreloadConfig;
}

const Preloader: React.FC<PreloaderProps> = ({ configs, children }) => {
  return (
    <>
      {Object.keys(configs).map((config) => {
        const cnf = configs[config as SupportVendors];
        return (
          <Script
            key={cnf.src}
            src={cnf.src}
            strategy={cnf.strategy ?? "afterInteractive"}
            onLoad={cnf.onload}
          />
        );
      })}
      {children}
    </>
  );
};

export default Preloader;
