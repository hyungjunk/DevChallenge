import React from "react";
import Category from "./Category";
import Settings from "./Settings";
import Logo from "./Logo";

const Sidebar: React.FC = (props) => {
  return (
    <div className={"sidebar"}>
      <Logo />
      <Category />
      <Settings />
      <style jsx>{`
        .sidebar {
          position: sticky;
          width: 20rem;
          margin-right: 10rem;
          height: fit-content;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
