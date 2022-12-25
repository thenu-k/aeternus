import styled from "styled-components";

export const FactsContainer = styled.section`
    width: 100%;
    background-color: white; color: black;

    & .inner{
        margin-bottom: 150px;
        width: 90%; display: flex; flex-direction: column; align-items: center;

        & h3{
            font-weight: 400; font-size: 1.5em;
            margin-bottom: 100px; 
            letter-spacing: 2px;
        }

        & .innerFacts{
            width: 100%; 
            display: flex; flex-direction: row; justify-content: space-evenly;

            & .box{
                min-height: 400px; width: 400px;
                display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;
                background-color: #e3e3e3;
                border-radius: 20px;
                h5{
                    font-size: 1em; font-weight: 400; letter-spacing: 2px;
                }
                h4{
                    font-size: 6em; font-weight: 400;
                }
                p{
                    text-align: center;
                }
            }
        }
    }

    @media all and (max-width: 1024px){
        & .inner{
            margin-bottom: 100px;
            & .innerFacts .box{
                min-height: 300px; width: 300px;
                h4{
                    font-size: 3em; font-weight: 400;
                }
            }
        }
    }
    @media all and (max-width: 700px){
        & .inner{
            & h3{
            font-weight: 400; font-size: 1.5em;
            margin-bottom: 60px; 
            letter-spacing: 2px;
            }   
            & .innerFacts{
                align-items: center;
                flex-direction: column;
                & .box{
                    width: 90%;
                    &:first-of-type{margin-bottom: 40px;}
                    & p{
                        max-width: 90%;
                    }
                }
            }
        }
    }
`