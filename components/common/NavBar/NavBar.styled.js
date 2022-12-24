import styled from "styled-components";

export const NavBarContainer = styled.header`
    width: 100%;
    background-color: white; color: black;
    display: flex; flex-direction: column; align-items: center;

    & h1{
        font-size: 1.5em; font-weight: 900; 
        padding: 15px 0;
    }

    & nav{
        width: 100%;
        > ul{
            width: 50%; 
            display: flex; flex-direction: row; justify-content: space-evenly;
        }
        & a{
            display: inline-block;
            padding: 20px;
        }
    }
`