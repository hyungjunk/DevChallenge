import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 10%;
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
