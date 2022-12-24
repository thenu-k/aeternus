import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #e3e3e3;
    & .inner{
        width: 90%;
        display: flex; flex-direction: column; align-items: flex-start;
        margin: 50px 0;
    }

    & h3{
        font-weight: normal; font-size: 1.5em; 
        margin-bottom: 50px; letter-spacing: 2px;
    }

    & .footerContents{
        width: 100%;
        display: flex; flex-direction: row; 

        & .column{
            display: flex; flex-direction: column; align-items: center;
            margin-right: 100px;
            & a {
                padding: 0 10px;
                width: fit-content;
                margin-bottom: 25px;
                border-bottom: none;
                &:hover{
                    opacity: 0.7;
                    border-bottom: none;
                }
                &:last-of-type{
                    margin: 0;
                }
            }

            &.end{
                margin-left: auto;
                & p{
                    margin-bottom: 25px;
                }
            }
        }
    }
`