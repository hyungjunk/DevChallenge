import React, { ReactNode } from "react";
import styles from "../../../../styles/Side.module.css";
import { dateHelper } from "../../../../helpers/dates";
import { useStore } from "../../../../stores/storeContext";

interface WeatherStatus {
  isCelcius: boolean;
  children: ReactNode;
}

const WeatherStatus: React.FC<WeatherStatus> = ({
  isCelcius,
  children,
}: WeatherStatus) => {
  const { appStore } = useStore();
  const temperature = getTemperature(appStore, isCelcius);
  return (
    <>
      <div className={styles.weatherStatus} style={{ flex: "2" }}>
        <span className={styles.celciusNumber}>{temperature}</span>
        <p>{appStore.weather?.weather?.[0]?.main}</p>
      </div>
      <div className={styles.weatherStatus} style={{ flex: "1" }}>
        <span>{dateHelper.getToday()}</span>
        <p>{`${appStore.currentCity?.cityName}`}</p>
      </div>
    </>
  );
};

const getTemperature = (appStore: any, isCelcius: boolean) => {
  const currentTemp = appStore.weather?.main?.temp;
  if (currentTemp == null) return "Loading..";
  if (isCelcius) {
    return `${Math.floor(Number(appStore.weather?.main?.temp) - 273.15)}℃`;
  }
  return `${Number(appStore.weather?.main?.temp)}F`;
};

export default WeatherStatus;
