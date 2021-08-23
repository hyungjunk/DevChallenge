import React from "react";
import MainContent from "../../src/components/main/MainContent";
import Sidebar from "../../src/components/side/Sidebar";

interface MainProps {}

const Main: React.FC = (props) => {
  // const windowSize = useWindowSize()
  return (
    <div className={"mainLayout"}>
      <Sidebar />
      <MainContent />
      <style jsx global>{`
        body {
          background: rgb(16, 20, 33);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Main;
