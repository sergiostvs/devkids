import styled from "styled-components"

export const Container = styled.div`
    background: #FFC2D5;
    /* max-width: 350px; */
    height: 150px;
    width: 100%;
    color: #fff;
    border-radius: 1.3rem;
    padding: 1rem;
    transition: transform .2s;

    &:hover {
        transform: scale(1.01);
    }
`