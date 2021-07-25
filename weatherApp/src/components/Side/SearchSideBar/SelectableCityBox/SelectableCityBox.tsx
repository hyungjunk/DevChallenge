import React from "react";
import { observer } from "mobx-react";
import styles from "../../../../styles/Side.module.css";
import { store } from "../../../../stores/ObservableDataStore";

const SelectableCityBox = observer((props) => {
  return (
    <div className={styles.selectableCityWrapper}>
      {store.selectableCities?.map((city) => {
        return (
          <button
            className={styles.selectableCity}
            key={city.cityName}
            onClick={() => {
              const currentCity = store.selectableCities.find(
                (cityStored) => cityStored.cityName === city.cityName,
              );
              store.currentCity = currentCity!;
            }}
          >
            {city.cityName}
          </button>
        );
      })}
    </div>
  );
});

export default SelectableCityBox;
