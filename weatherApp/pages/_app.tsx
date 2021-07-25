import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../src/stores/ObservableDataStore";
import ErrorBoundary from "../src/ErrorBoundary";

function WeatherApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} store={store} />;
}
export default WeatherApp;
