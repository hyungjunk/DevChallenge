import styles from "../../styles/Main.module.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import HighlightCard from "./HighlightCard/HighlightCard";
import { HIGHLIGHT_CARD_TYPE } from "../../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import is from "@sindresorhus/is";
import { dateHelper } from "../../helpers/dates";
import { Weather } from "../../../pages/api/weather/model";
import { useStore } from "../../stores/storeContext";
import { observer } from "mobx-react";

// observer
const Main = observer(() => {
  const [foreWeathers, setForeWeathers] = useState([]);
  const { appStore } = useStore();

  useEffect(() => {
    const fetchForeWeathers = async () => {
      if (is.falsy(appStore.currentCity?.cityName)) return;
      const [lat, lng] = appStore.currentCity.latlng.split(",");
      const result = await axios.get(
        `/api/weather/forecast?lat=${lat}&lng=${lng}`,
      );
      setForeWeathers(result.data.result.daily.splice(1, 7));
    };
    fetchForeWeathers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStore.currentCity]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cards}>
        {foreWeathers.map((foreWeather: ForeWeather, idx) => (
          <WeatherCard
            key={idx}
            index={idx}
            weatherReadable={foreWeather.weather[0].main}
            dateReadable={dateHelper.toDateString(
              new Date(foreWeather.dt * 1000),
            )}
            maxTemp={Math.floor(foreWeather.temp.max - 273.15)}
            minTemp={Math.floor(foreWeather.temp.min - 273.15)}
          />
        ))}
      </div>
      <br />
      <br />
      <p style={{ fontSize: "3em" }}>Today&apos;s Highlight</p>
      <div className={styles.highlight}>
        <div>
          <HighlightCard
            title={HIGHLIGHT_CARD_TYPE.WIND}
            info={{
              speed: appStore.weather?.wind?.speed || 0,
              degree: appStore.weather?.wind?.deg || 0,
            }}
          />
          <HighlightCard
            title={HIGHLIGHT_CARD_TYPE.AIRPRESSURE}
            info={appStore.weather?.main?.pressure || 0}
          />
        </div>
        <div>
          <HighlightCard
            title={HIGHLIGHT_CARD_TYPE.HUMIDITY}
            info={appStore.weather?.main?.humidity || 0}
          />
          <HighlightCard
            title={HIGHLIGHT_CARD_TYPE.VISIBILITY}
            info={appStore.weather?.visibility || 0}
          />
        </div>
      </div>
    </div>
  );
});

interface ForeWeather extends Weather {
  temp: {
    max: number;
    min: number;
  };
}

export default Main;
