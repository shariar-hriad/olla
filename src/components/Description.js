import React from "react";
import styled from "styled-components";

function Description({ children }) {
  return <SecSubTitle children={children} />;
}

export default Description;

export const SecSubTitle = styled.p`
  color: #656565;
  font-size: 18px;
  line-height: 1.5;
`;
