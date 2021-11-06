import React from "react";
import styled from "styled-components";

function Title({ children }) {
  return <SecTitle children={children} />;
}

export default Title;

export const SecTitle = styled.h1`
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
  color: #041735;
  margin-bottom: 12px;
`;
