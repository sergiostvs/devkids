import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    
    body {
        background: #6A5CF7;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    a {
        text-decoration: none;
    }
`

export const Container = styled.div`
    display: flex;
    padding: 1rem 1rem 1rem 0;
    height: 100%;
`