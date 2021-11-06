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
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: auto;
`;
