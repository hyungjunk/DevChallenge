import { useState } from "react";
import { SearchSideBar } from "./SearchSideBar";
import { DefaultSideBar } from "./DefaultSideBar";
import { observer } from "mobx-react";

const Side = observer(() => {
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
});

export default Side;
