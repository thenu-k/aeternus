import styled from "styled-components";

export const AboutContainer = styled.section`
    width: 100%;

    > .inner{
        width: 90%;
        display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;
        margin: 100px 0;
    }

    & .box{
        height: 32vw; width: 40%; border-radius: 20px;
        &.text{
            /* background-color: white;
            display: flex; flex-direction: column; align-items: flex-start;
            > h3{
                font-size: 2em; font-weight: 900; margin-bottom: 30px;
            }
            > p{
                font-weight: 500; font-size: 1.2em;
            } */
            background-image: url('/specs.jpg');
            background-size: cover; background-repeat: no-repeat; background-position: center;
        }
        &.specs{ 
            background-image: url('/landing2.jpg');
            background-size: cover; background-repeat: no-repeat; background-position: center;
        }
    }
`