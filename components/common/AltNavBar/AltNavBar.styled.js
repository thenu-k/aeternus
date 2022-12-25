import styled from "styled-components";

export const AltNavBarContainer = styled.header`
    width:  100%; height: 50px;
    color: black; background-color: white;

    > nav{
        width: 100%; height: 100%;
        display: flex; flex-direction: row; align-items: center; justify-content: center;
        position: relative; 
        > h1{
            font-size: 1em; letter-spacing: 2px; font-weight: normal;
        }
        > button{
            position: absolute; right: 5%;
            z-index: 999;
            height: 25px; width: auto;
            & img{
                height: 100%;
            }
        }
    }

`