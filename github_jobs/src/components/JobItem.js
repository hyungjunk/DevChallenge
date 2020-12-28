import React from "react";
import styled from "styled-components";

const JobItemStyled = styled.div`
  grid-column: 3/6;
  min-height: 100px;
`;

const JobItem = (props) => {
  const { item } = props;
  return <JobItemStyled>This is one job item: {item.company}</JobItemStyled>;
};

export default JobItem;
