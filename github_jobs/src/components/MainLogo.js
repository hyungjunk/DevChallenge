import React from "react";
import styled from "styled-components";

const ThickText = styled.span`
  font-size: 24px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
  }
`;
const MainLogo = (props) => {
  return (
    <div>
      <ThickText>Github</ThickText> Jobs
    </div>
  );
};

export default MainLogo;
