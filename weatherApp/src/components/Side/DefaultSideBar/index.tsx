import styles from "../../../styles/Side.module.css";
import SearchHeader from "./SearchHeader/SearchHeader";
import WeatherStatus from "./WeatherStatus/WeatherStatus";
import React, { Dispatch, SetStateAction } from "react";
import { observer } from "mobx-react";
import { useCelcius } from "../../../hooks/useCelcius";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import { ImageFill } from "../../Images/ImageFill";
import { useStore } from "../../../stores/storeContext";

export const DefaultSideBar = observer(
  ({
    setIsSidebarOpen,
  }: {
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    const { appStore } = useStore();
    const weatherReadable = appStore.weather?.weather?.[0]?.main || "";
    const { isCelcius, setIsCelcius } = useCelcius();
    return (
      <div className={styles.side}>
        <SearchHeader
          toggleSideSearchBar={setIsSidebarOpen}
          setIsCelcius={setIsCelcius}
        />
        <WeatherIcon
          weatherReadable={weatherReadable}
          wrapperStyle={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
          ImageComponent={ImageFill}
          imageStyle={{
            sizes: "10%",
            layout: "fill",
            objectFit: "contain",
          }}
        />
        <WeatherStatus isCelcius={isCelcius} />
      </div>
    );
  },
);
