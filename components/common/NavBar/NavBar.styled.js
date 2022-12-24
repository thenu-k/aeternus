import styled from "styled-components";

export const NavBarContainer = styled.header`
    width: 100%;
    background-color: white; color: black;
    display: flex; flex-direction: row; align-items: center; justify-content: space-between;

    & h1{
        font-size: 1.5em; font-weight: 400; 
        padding-left: 5%; letter-spacing: 2px;
    }

    & nav{
        padding-right: 5%;
        > ul{
            display: flex; flex-direction: row; justify-content: space-evenly;
        }
        & li{
            height: 60px;
            display: flex; justify-content: center; align-items: center;
        }
        & a{
            display: inline;
            margin: 0 20px;
        }
    }
`