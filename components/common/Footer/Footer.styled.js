import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #e3e3e3;
    & .inner{
        width: 90%; max-width: 2000px;
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
            display: flex; flex-direction: column; align-items: flex-start;
            margin-right: 100px;
            & a {
                /* padding: 0 10px; */
                text-align: left;
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

            & .columnHeading{
                    display: none;
                    font-weight: normal;
            }

            &.end{
                margin-right: 0;
                margin-left: auto;
                & p{
                    margin-bottom: 25px;
                }
            }
        }
    }

    @media all and (max-width: 800px){
            & .footerContents{
                flex-direction: column;
                align-items: center;
            }

            & .column{
                width: 100%;
                margin: 0 !important;
                padding: 25px 0 25px 0 !important;
                border-top: 1px solid #a2a2a2;
                height: 1em; overflow: hidden;
                transition: height 0.5s ease-out;

                &.column .columnHeading{
                    margin-bottom: 25px;
                    display: flex;
                    & h5{
                        font-weight: normal;
                        margin-right: 20px;
                    }
                    & button{
                        cursor: pointer;
                        height: 1em; width: auto;
                        display: flex; justify-content: center; align-items: center;
                        position: relative;

                        & img{
                            height: 100%;
                            position: absolute;
                            top: 20%;
                            transition: transform 0.5s ease-out;
                            &.rotate {
                                transform: rotate(-180deg);
                            }
                        }
                    }
                }

            }
            & .show{
                    overflow: visible;
                    height: 200px;;
                }

        }
        & .column.end{
                padding-top: 50px !important;
                align-items: center;
        }

        & h3{
            text-align: center; width: 100%;;
        }
`