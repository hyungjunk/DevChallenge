import "../src/styles/globals.css";
import type { AppProps } from "next/app";

function WeatherApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default WeatherApp;
