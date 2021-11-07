import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function Header() {
  return (
    <HeaderArea>
      <TopBar />
      <NavBar />
    </HeaderArea>
  );
}

export default Header;

const HeaderArea = styled.header``;
