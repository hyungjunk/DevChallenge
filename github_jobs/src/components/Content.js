import React from "react";
import { useMedia } from "react-use";

const Content = ({ children }) => {
  const isWide = useMedia("(min-width: 400px)");
  if (isWide) {
    return (
      <>
        <div>Wide Screen</div>
        {children}
      </>
    );
  } else {
    return (
      <>
        <div>Narrow Screen</div>
        {children}
      </>
    );
  }
};

export default Content;
