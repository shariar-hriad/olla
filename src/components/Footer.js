import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import arrow from "../images/arrow.svg";
import flogo from "../images/flogo.webp";
import { Button, Input, InputForm } from "./Banner";

function Footer() {
  return (
    <FooterArea>
      <Container>
        <Wrapper>
          <SingleFooter>
            <FooterLogo>
              <Logo src={flogo} alt="olla" />
            </FooterLogo>
          </SingleFooter>
          <SingleFooter>
            <Title>Quick Links</Title>
            <Menu>
              <MenuList>
                <MenuLink to="">Work</MenuLink>
              </MenuList>
              <MenuList>
                <MenuLink to="">Services</MenuLink>
              </MenuList>
              <MenuList>
                <MenuLink to="">Tips &amp; Tricks</MenuLink>
              </MenuList>
              <MenuList>
                <MenuLink to="">Contact</MenuLink>
              </MenuList>
            </Menu>
          </SingleFooter>
          <SingleFooter>
            <Title>Support</Title>
            <Menu>
              <MenuList>
                <MenuLink to="">Faq</MenuLink>
              </MenuList>
              <MenuList>
                <MenuLink to="">Submit Ticket</MenuLink>
              </MenuList>
              <MenuList>
                <MenuLink to="">Contact Us</MenuLink>
              </MenuList>
            </Menu>
          </SingleFooter>
          <NewsLetter>
            <Title>Newsletter</Title>
            <Description>Subscribe newsletter to get updates..</Description>
            <Form>
              <InputForm>
                <Input type="text" placeholder="Enter your email" />
                <Button to="">
                  <img src={arrow} alt="" />
                </Button>
              </InputForm>
            </Form>
          </NewsLetter>
        </Wrapper>
      </Container>
      <CopyRight>
        <Container>
          <FooterBorder>
            <CopyRightContent>
              <CopyText>
                Copyright &copy; {new Date().getFullYear()}All rights reserved |
                This template is made by Shariar Hossain Riad..
              </CopyText>
            </CopyRightContent>
          </FooterBorder>
        </Container>
      </CopyRight>
    </FooterArea>
  );
}

export default Footer;

const FooterArea = styled.footer`
  background: #041735;
  padding-top: 99px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SingleFooter = styled.div`
  margin-bottom: 50px;
  padding: 0 7px;
`;
const FooterLogo = styled.div`
  padding: 0 3px;
`;
const Logo = styled.img`
  width: 93px;
`;
const Title = styled.h4`
  color: #fff;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600;
`;
const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const MenuList = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
const MenuLink = styled(NavLink)`
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  text-decoration: underline transparent;
  &:hover {
    text-decoration: underline;
  }
`;
const NewsLetter = styled.div`
  padding: 0 7px;
  margin-left: 160px;
`;
const Description = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.4;
`;
const Form = styled.form`
  margin-bottom: 40px;
`;
const CopyRight = styled.div``;
const FooterBorder = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  padding-top: 39px;
  padding-bottom: 1px;
`;
const CopyRightContent = styled.div`
  padding: 0 20px;
  text-align: center;
`;
const CopyText = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 2;
`;
