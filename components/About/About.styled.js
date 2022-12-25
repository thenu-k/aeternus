import styled from "styled-components";

export const AboutContainer = styled.section`
    width: 100%;
    background-color: white; color: black;
    letter-spacing: 2px;
    > .inner{
        width: 90%;
        display: flex; flex-direction: row; justify-content: space-between; align-items: center;
        margin: 150px 0;
    }

    & .box{        
        &.text{
            max-width: 30%;
            display: flex; flex-direction: column; align-items: flex-start; 
            padding-left: 50px;
            border-left: 2px solid black;
            & * {margin-bottom: 40px; line-height:1.5;}

            & h4{
                font-weight: 400; font-size: 1em;
                background-color: black; color: white; padding: 5px 10px; border-radius: 5px;
            }
            & h3{
                font-weight: 400; font-size: 1.5em;
            }
            & p{
                letter-spacing: normal;
            }
        }

        &.image{
            width: 50%; height: 30vw; 
            border-radius: 20px;
            background-image: url('/landing2.jpg'); background-position: center;
            background-size: cover; background-repeat: no-repeat;
        }
    }

    @media all and (max-width: 1024px){
        & .inner{
            flex-direction: column;
            margin: 100px 0;
        }
        & .box{
            &.text{
                padding-left: 25px;
                max-width: none;
                width: 90%;
                margin-bottom: 60px;
                & * {margin-bottom: 20px; line-height:1.5;}
            }
            &.image{
                height: 40vw;
                width: calc(90% + 25px);
            }
        }
    }
    @media all and (max-width: 500px){
        & .box.image{
            height: 80vw;
        }
    }
`