import React, { Dispatch, SetStateAction } from "react";
import { store } from "../../../../stores/ObservableDataStore";
import styles from "../../../../styles/Side.module.css";
import { useGlobalState } from "../../../../hooks/useGlobalState";
import { useStore } from "../../../../stores/storeContext";

const SearchHeader = ({
  toggleSideSearchBar,
}: // setIsCelcius,
SearchHeaderProps) => {
  const { authStore } = useStore();
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
      <button className={styles.logout} onClick={() => authStore.logout()}>
        {authStore.isLoggedIn ? "Logout" : ""}
      </button>
    </div>
  );
};

interface SearchHeaderProps {
  toggleSideSearchBar: Dispatch<SetStateAction<boolean>>;
  setIsCelcius: Dispatch<SetStateAction<void>>;
}

export default SearchHeader;
