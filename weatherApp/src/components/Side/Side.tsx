import { useState } from "react";
import { SearchSideBar } from "./SearchSideBar";
import { DefaultSideBar } from "./DefaultSideBar";

const Side = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <SearchSideBar
        isSidebarOpen={isSidebarOpen}
        toggleSideSearchBar={setIsSidebarOpen}
      />
      <DefaultSideBar setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Side;
