import React, { Dispatch, SetStateAction } from "react";
import { store } from "../../../../stores/ObservableDataStore";
import styles from "../../../../styles/Side.module.css";
import { useCelcius } from "../../../../hooks/useCelcius";
import { useGlobalState } from "../../../../hooks/useGlobalState";

const SearchHeader = ({
  toggleSideSearchBar,
  setIsCelcius,
}: SearchHeaderProps) => {
  return (
    <div className={styles.searchHeaderWrapper}>
      <button
        className={styles.searchPlaceBtn}
        type={"button"}
        onClick={(e) => {
          toggleSideSearchBar((state) => !state);
        }}
      >
        Search for places
      </button>
      <button
        className={styles.geoBtn}
        onClick={() => store.setDefaultCity()}
      />
      {/*<button className={styles.geoBtn} onClick={() => setIsCelcius()}>*/}
      {/*  Toggle*/}
      {/*</button>*/}
    </div>
  );
};

interface SearchHeaderProps {
  toggleSideSearchBar: Dispatch<SetStateAction<boolean>>;
  setIsCelcius: Dispatch<SetStateAction<void>>;
}

export default SearchHeader;
