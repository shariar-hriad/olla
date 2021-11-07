import React from "react";
import styled from "styled-components";

function Tabs({ click, toggle }) {
  return (
    <TabUl>
      <TabList
        className={toggle === 1 ? "active" : null}
        onClick={() => click(1)}
      >
        Yearly
      </TabList>
      <TabList
        className={toggle === 2 ? "active" : null}
        onClick={() => click(2)}
      >
        Monthly
      </TabList>
    </TabUl>
  );
}

export default Tabs;

const TabUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const TabList = styled.li`
  background: rgba(74, 168, 198, 0.1);
  font-family: "Cabin", sans-serif;
  color: #4aa8c6;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 19px;
  border-radius: 4px 0 0 4px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &.active {
    color: #fff;
    background: #4aa8c6;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;
