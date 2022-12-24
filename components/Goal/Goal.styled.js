import styled from "styled-components";

export const GoalContainer = styled.section`
    width: 100%;

    & .inner{
        width: 90%; background-color: black; color: white;
        border-radius: 20px;
        margin-bottom: 150px;
        display: flex; flex-direction: column; align-items: center;
    }

    & h4{
        margin-top: 50px; font-weight: normal; font-size: 1em; letter-spacing: 2px;
        background-color: white; color: black; padding: 5px 20px; 
        border-radius: 5px;
    }

    & h3{
        margin: 50px 0;
        font-weight: 400; font-size: 1.5em; letter-spacing: 2px;
    }

    & p {
        width: 70%; line-height: 1.5;
        margin-bottom: 70px;
    }

    & .icons{
        display: flex; flex-direction: row;
        margin-bottom: 70px;
        & img{
            border-radius: 10px;
            height: 90px; padding: 0 30px;
        }
    }
`