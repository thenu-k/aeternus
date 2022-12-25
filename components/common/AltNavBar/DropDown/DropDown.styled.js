import styled from "styled-components";

export const DropDownContainer = styled.div`
    height: 200px;
    background-color: #e3e3e3; color: black;
    position: absolute; z-index: 9999;
    bottom: -220px;
    right: 5%;
    border-radius: 10px;

    > ul{
        height: 100%;
        display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;
        border-radius: inherit;
        >li{
            width: 200px; padding: 5px 5px;
            /* border-bottom: 2px solid black; */
            display: flex; justify-content: center; align-items: center;
            >a:hover{
                border: none;margin-bottom: 0 !important;
            }
            > a{
                height: 100%; width: 100%;
                display: flex; justify-content: center; align-items: center;
            }
        }
    }
`