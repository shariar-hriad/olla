import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        /* background-color: #03091F; */
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
    }
    @media screen and (min-width: 992px) {
        body {
            font-size: 18px;
            line-height: 1.6;
        }
    }
    a {
        text-decoration: none;
        transition: all 0.3s ease;
    }
    a:hover {
        text-decoration: none;
    }
    img {
        max-width: 100%;
        vertical-align: middle;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Cabin', sans-serif;
        font-weight: 500;
    }
    h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child {
        margin-top: 0;
    }
    a,span {
        display: inline-block;
    }
    .slick-track {
        display: flex;
        align-items: center;
    }
    .accordion {
        border: none;
        border-radius: unset;
    }
    .accordion>div:not(:last-child) {
        margin-bottom: 20px;
    }
    .accordion__item {
        border: 1px solid #dbdee9;
        border-radius: 4px;
    }
    .accordion__button {
        position: relative;
        text-align: left;
        color: #041735;
        padding: 20px 10px 21px 34px;
        font-size: 20px;
        font-weight: 600;
        background: none;
        border-radius: 0;
        overflow-anchor: none;
        cursor: pointer;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease-in-out;
    }
    .accordion__button:before {
        position: absolute;
        right: 20px;
        top: 43%;
    }
    .accordion__button:focus {
        color: #2845ba;
    }
    .accordion__panel {
        background: #fff;
        padding: 20px 38px;
        transition: all 0.3s ease-out 0s;
    }
    .accordion__button:hover {
        background: unset;
    }
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: auto;
`;
