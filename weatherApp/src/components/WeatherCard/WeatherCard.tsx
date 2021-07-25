import React from "react";
import WeatherIcon from "../Side/DefaultSideBar/WeatherIcon/WeatherIcon";
import styles from "../../styles/Main.module.css";
import Image from "next/image";

const WeatherCard = ({
  index,
  weatherReadable,
  dateReadable,
  maxTemp,
  minTemp,
}: WeatherCardProps) => {
  const isTomorrow = index === 0;
  return (
    <div className={styles.weatherCard}>
      <span>{isTomorrow ? "Tomorrow" : dateReadable}</span>
      <WeatherIcon
        weatherReadable={weatherReadable}
        wrapperStyle={{ width: "100", height: "100" }}
        // TODO : ㅠㅠ
        ImageComponent={Image}
        imageStyle={{ width: 100, height: 100 }}
      />
      <div>
        <span>{maxTemp}</span> / <span>{minTemp}</span>
      </div>
    </div>
  );
};

interface WeatherCardProps {
  index: string | number;
  weatherReadable: string;
  dateReadable: string;
  maxTemp: number;
  minTemp: number;
}

export default WeatherCard;
