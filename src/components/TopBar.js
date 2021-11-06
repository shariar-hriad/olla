import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopBar() {
  return (
    <Topbar>
      <TopbarContent>
        <TopbarText>
          This handy little bar is great for informing visitors of various
          features.
        </TopbarText>
        <Button to="/">Learn More</Button>
      </TopbarContent>
    </Topbar>
  );
}

export default TopBar;

const Topbar = styled.div`
  background: #041735;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopbarContent = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const TopbarText = styled.p`
  color: #fff;
  font-size: 15px;
  line-height: 21px;
  margin: 0;
`;

const Button = styled(Link)`
  display: inline-block;
  font-size: 14px;
  color: #fff;
  padding: 9px 21px;
  margin-left: 9px;
  font-weight: 600;
  background: linear-gradient(
    to bottom,
    #1e5799 0%,
    #2989d8 0%,
    #ff8a7a 0%,
    #ffc99e 99%,
    #ffc99e 100%
  );
  border-radius: 50px;
  transition: all 0.5s;

  &:hover {
    background: linear-gradient(
      to right,
      #1e5799 0%,
      #2989d8 0%,
      #ff8a7a 0%,
      #ffc99e 99%,
      #ffc99e 100%
    );
  }
`;
