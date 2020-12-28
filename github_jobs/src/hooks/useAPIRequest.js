import React, { useEffect, useState } from "react";

const useAPIRequest = (url) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((final) => {
        console.log(final);
        setResult(final);
      });
  }, []);
  return result;
};

export default useAPIRequest;
