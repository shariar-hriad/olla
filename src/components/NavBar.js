import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.webp";

function NavBar() {
  return (
    <Navbar>
      <NavbarWrapper>
        <Navlogo to="/">
          <Image src={logo} alt="olla" />
        </Navlogo>
        <NavMenu>
          <NavList>
            <Navlink to="/">Home</Navlink>
          </NavList>
          <NavList>
            <Navlink to="/about">about</Navlink>
          </NavList>
          <NavList>
            <Navlink to="/">services</Navlink>
          </NavList>
          <NavList>
            <Navlink to="/">portfolio</Navlink>
          </NavList>
          <NavList>
            <Navlink to="/">Blog</Navlink>
          </NavList>
          <NavList>
            <Navlink to="/">Contact</Navlink>
          </NavList>
        </NavMenu>
        <ButtonWrapper>
          <NavButton to="">Free Qute</NavButton>
        </ButtonWrapper>
      </NavbarWrapper>
    </Navbar>
  );
}

export default NavBar;

const Navbar = styled.div`
  padding: 0 88px;
  box-shadow: 0 3px 8px rgb(4 23 53 / 4%);
  border-bottom: 1px solid #dbdee9;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navlogo = styled(Link)`
  padding: 0 2px;
`;

const Image = styled.img`
  width: 93px;
`;

const NavMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const NavList = styled.li`
  margin: 0 11px;
`;

const Navlink = styled(NavLink)`
  display: inline-block;
  padding: 24px 9px;
  color: #041735;
  font-size: 17px;
  font-weight: 600;
  transition: all 0.3s ease-out 0s;
  text-transform: capitalize;
  position: relative;

  &:hover {
    color: #2845ba;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 0 0 3px;
`;

const NavButton = styled(Link)`
  display: inline-block;
  background: #2845ba;
  border: 1px solid #2845ba;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 4px;
  text-transform: capitalize;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: none;
    color: #2845ba;
  }
`;
