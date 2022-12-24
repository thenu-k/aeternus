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
`