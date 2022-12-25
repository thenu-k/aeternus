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
            font-size: 6em; font-weight: 400;
            margin-bottom: 30px;
        }
        > p{
            font-weight: 400;
            font-size: 1em;
            margin-bottom: 40px;
        }
        > a{
            background-color: white; color: black; padding: 20px;
            font-weight: 400; 
            border-radius: 10px;
            &:hover{
                border: 0; opacity: 0.7;
            }
        }
    }

    @media all and (max-width: 1024px){
        height: calc(100vh - 50px);
        & .text{
            top: 35%;
            left: unset;
            align-items: center;
            > h2{
                font-size: 5em;
            }
            > a {
                /* padding: 15px 20px; */
            }
        }
    }
    @media all and (max-width: 500px){
        & .text{
            top: 25%;
        }
        & .text h2{
            font-size: 3em;
            margin-bottom: 30px;
        }
        & .text a {
            font-size: 0.8em;
            padding: 15px;
            border-radius: 8px;
        }
    }
`