import React, { useState } from "react";
import styles from "../../../../styles/Side.module.css";
import { store } from "../../../../stores/ObservableDataStore";

const SearchInput = (_) => {
  const [currentKeyword, setCurrentKeyword] = useState("");
  return (
    <div className={styles.searchInputWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={"Search location"}
        onChange={(e) => setCurrentKeyword(e.target.value)}
      />
      <button
        className={styles.searchBtn}
        type={"button"}
        onClick={async (e) => {
          const result = await fetch(
            `/api/weather/search?keyword=${currentKeyword}`,
          );
          const { data } = await result.json();
          store.selectableCities = data;
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
