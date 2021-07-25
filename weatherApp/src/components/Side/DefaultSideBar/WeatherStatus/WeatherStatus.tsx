import React from "react";
import { store } from "../../../../stores/ObservableDataStore";
import styles from "../../../../styles/Side.module.css";
import { dateHelper } from "../../../../helpers/dates";

const WeatherStatus = (props) => {
  const temperature = getTemperature(props.isCelcius);
  return (
    <>
      <div className={styles.weatherStatus} style={{ flex: "2" }}>
        <span className={styles.celciusNumber}>{temperature}</span>
        <p>{store.weather?.weather?.[0]?.main}</p>
      </div>
      <div className={styles.weatherStatus} style={{ flex: "1" }}>
        <span>{dateHelper.getToday()}</span>
        <p>{`${store.currentCity?.cityName}`}</p>
      </div>
    </>
  );
};

const getTemperature = (isCelcius: boolean) => {
  const currentTemp = store.weather?.main?.temp;
  if (currentTemp == null) return "Loading..";
  if (isCelcius) {
    return `${Math.floor(Number(store.weather?.main?.temp) - 273.15)}℃`;
  }
  return `${Number(store.weather?.main?.temp)}F`;
};

export default WeatherStatus;
