import styles from "../../../styles/Side.module.css";
import SearchInput from "./SearchInput/SearchInput";
import { Dispatch, SetStateAction } from "react";
import SelectableCityBox from "./SelectableCityBox/SelectableCityBox";
import CloseButton from "./CloseButton/CloseButton";
import { store } from "../../../stores/ObservableDataStore";

export const SearchSideBar = ({
  isSidebarOpen,
  toggleSideSearchBar,
}: SearchSideBarProps) => {
  if (isSidebarOpen) {
    return (
      <div className={styles.searchSideBar}>
        <CloseButton close={() => toggleSideSearchBar(false)} />
        <SearchInput />
        <SelectableCityBox />
      </div>
    );
  }
  return <></>;
};

interface SearchSideBarProps {
  isSidebarOpen: boolean;
  toggleSideSearchBar: Dispatch<SetStateAction<boolean>>;
}
