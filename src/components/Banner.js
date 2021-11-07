import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../images/banner.webp";
import csimg from "../images/bannerbottom.png";

function Banner() {
  return (
    <BannerArea>
      <BannerContent>
        <BannerCaption>
          <SubTitle>A complete business solution</SubTitle>
          <Title>Build your website in record time.</Title>
          <Description>
            Combine sections from Olla's vast component library and create
            beautiful.
          </Description>
          <Form>
            <InputForm>
              <Input type="text" placeholder="Enter your email" />
              <Button to="">Get Free Qoute</Button>
            </InputForm>
          </Form>
        </BannerCaption>
        <BannerImage>
          <Bg src={bg} alt="bg" />
        </BannerImage>
      </BannerContent>
      <CustomImg src={csimg} alt="" />
    </BannerArea>
  );
}

export default Banner;

const BannerArea = styled.section`
  height: 85vh;
  position: relative;
`;

const CustomImg = styled.img`
  position: absolute;
  bottom: -13%;
  left: 60px;
`;

const BannerContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const BannerCaption = styled.div`
  width: 35%;
  padding-right: 50px;
  position: relative;
`;

const SubTitle = styled.span`
  display: inline-block;
  color: #2845ba;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  margin-bottom: 8px;
  background: rgba(40, 69, 186, 0.1);
  border-radius: 3px;
  padding: 5px 10px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 66px;
  color: #041735;
  margin-top: 0;
`;

const Description = styled.p`
  margin-bottom: 40px;
  font-size: 22px;
  padding-right: 50px;
  color: #041735;
  line-height: 31px;
  font-weight: 500;
`;

const Form = styled.form``;

export const InputForm = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background: #fff;
  border: 1px solid #2845ba;
  justify-content: space-between;
  border-radius: 4px;
`;

export const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  padding: 24px 30px;
  font-size: 18px;
  color: #041735;
  font-weight: 400;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Button = styled(Link)`
  display: inline-block;
  background: #2845ba;
  padding: 24px 19px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const BannerImage = styled.div`
  width: 50%;
  height: 100%;
`;

const Bg = styled.img`
  width: 100%;
  height: 100%;
`;
