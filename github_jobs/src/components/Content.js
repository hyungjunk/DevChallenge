import React, { useEffect } from "react";
import { useMedia } from "react-use";
import styled from "styled-components";
import JobList from "./JobList";
import SearchFilters from "./SearchFilters";
import useAPIRequest from "../hooks/useAPIRequest";

const ContentWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Content = ({ children }) => {
  const isWide = useMedia("(min-width: 400px)");
  const items = useAPIRequest("hel");
  console.log(items);

  // useEffect(() => {
  //   const jobs = fetch(
  //     "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     });
  //   items = jobs;
  // }, []);

  if (isWide) {
    return (
      <ContentWrapper>
        <SearchFilters />
        <JobList items={items} />
      </ContentWrapper>
    );
  } else {
    return (
      <>
        <ContentWrapper>Narrow Screen</ContentWrapper>
        {children}
      </>
    );
  }
};

export default Content;
