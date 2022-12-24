import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%; height: calc(100vh - 60px);
    min-height: 350px;
    background-image: url('./landing4.jpg'); background-position: center;
    background-position-y: 70%;;
    background-size: cover; background-repeat: no-repeat;
    position: relative;

    & .text{
        position: absolute; left: 5%;
        color: white;
        display: flex; flex-direction: column; align-items: flex-start;
        > h2{
            font-size: 6em; font-weight: 700;
            margin-bottom: 30px;
        }
        > p{
            font-weight: 700;
            font-size: 1em;
            margin-bottom: 40px;
        }
        > a{
            background-color: white; color: black; padding: 20px;
            font-weight: 700; 
            &:hover{
                border: 0; opacity: 0.7;
            }
        }
    }
`