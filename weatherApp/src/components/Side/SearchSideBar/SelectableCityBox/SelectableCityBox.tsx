import React from "react";
import styles from "../../../../styles/Side.module.css";
import { useStore } from "../../../../stores/storeContext";

const SelectableCityBox: React.FC = () => {
  const { appStore } = useStore();
  return (
    <div className={styles.selectableCityWrapper}>
      {appStore.selectableCities?.map((city) => {
        return (
          <button
            className={styles.selectableCity}
            key={city.cityName}
            onClick={() => {
              const currentCity = appStore.selectableCities.find(
                (cityStored) => cityStored.cityName === city.cityName,
              );
              appStore.currentCity = currentCity!;
            }}
          >
            {city.cityName}
          </button>
        );
      })}
    </div>
  );
};

export default SelectableCityBox;
