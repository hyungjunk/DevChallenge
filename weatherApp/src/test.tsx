import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "./ErrorBoundary";

const Test = ({ someprop }) => {
  return (
    <>
      <ErrorBoundary>
        <div>{someprop[42]}</div>
        <p>hello world</p>
      </ErrorBoundary>
    </>
  );
};

export default Test;
