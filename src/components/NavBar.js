import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.webp";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const fixedNav = () => {
    if (window.scrollY >= 76) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", fixedNav);

  return (
    <Navbar className={navbar ? "fixed" : null}>
      <NavbarWrapper>
        <Navlogo to="/">
          <Image src={logo} alt="olla" />
        </Navlogo>
        <NavMenu>
          <NavList>
            <Navlink to="/" activeClassName="active">
              Home
            </Navlink>
          </NavList>
          <NavList>
            <Navlink to="/about" activeClassName="active">
              about
            </Navlink>
          </NavList>
          <NavList>
            <Navlink to="/services" activeClassName="active">
              services
            </Navlink>
          </NavList>
          <NavList>
            <Navlink to="/portfolio" activeClassName="active">
              portfolio
            </Navlink>
          </NavList>
          <NavList>
            <Navlink to="/blog" activeClassName="active">
              Blog
            </Navlink>
          </NavList>
          <NavList>
            <Navlink to="/contact" activeClassName="active">
              Contact
            </Navlink>
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
  &.fixed {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
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
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-out 0s;
  text-transform: capitalize;
  position: relative;
  &.active {
    border-bottom: 3px solid #041735;
  }
  &:hover {
    color: #2845ba;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 0 0 3px;
`;

export const NavButton = styled(Link)`
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
