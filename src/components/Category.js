import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import Categories from "./Categories";
import Description from "./Description";
import Title from "./Title";

function Category() {
  return (
    <CategoryArea>
      <Container>
        <SectionContent>
          <Title children="Olla helps you to spruk your product’s features." />
          <Description children="Combine sections from Olla's vast component library and create beautiful." />
        </SectionContent>
        <Categories />
      </Container>
    </CategoryArea>
  );
}

export default Category;

const CategoryArea = styled.section`
  padding: 60px 0;
`;

const SectionContent = styled.div`
  padding: 15px 30px;
  text-align: center;
`;
