import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%; height: calc(70vh);
    background-image: url('./landing4.jpg'); background-position: center;
    background-position-y: 70%;;
    background-size: cover; background-repeat: no-repeat;
    position: relative;

    & .text{
        position: absolute; left: 5%;
        color: white;
        display: flex; flex-direction: column;
        > h2{
            font-size: 6em; font-weight: 900;
        }
    }
`