import React from "react";
import { imageHelper } from "../../../../helpers/images";
import styles from "../../../../styles/Side.module.css";
import { ImageProps } from "next/dist/client/image";

const WeatherIcon = ({
  weatherReadable,
  wrapperStyle,
  ImageComponent,
  imageStyle,
}: WeatherIconProp) => {
  return (
    <div className={styles.weatherIcon} {...wrapperStyle}>
      <ImageComponent
        src={imageHelper.getImageByWeather(weatherReadable)}
        {...imageStyle}
      />
    </div>
  );
};

interface WeatherIconProp {
  weatherReadable: string;
  wrapperStyle?: Record<string, string>;
  ImageComponent: React.ComponentType<{ src: string }>;
  imageStyle: Partial<ImageProps>;
}

export default WeatherIcon;
