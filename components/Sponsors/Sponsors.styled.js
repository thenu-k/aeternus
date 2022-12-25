import styled from "styled-components";

export const SponsorsContainer = styled.section`
    width: 100%;

    & .inner{
        width: 90%;
        display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between;
        margin-bottom: 150px;
    }

    & .box.text{
        max-width: 30%;
        display: flex; flex-direction: column; align-items: flex-end; justify-content: center;
        padding-right: 50px; border-right: 2px solid black;

        & * {margin-bottom: 40px; line-height: 1.5; font-weight: 400;}

        & h3, & h4{
            letter-spacing: 2px;
        }
        & h3{
            font-size: 1.5em;
        }
        & h4{
            background-color: black; color: white; padding: 5px 10px; border-radius: 5px;
        }
    }

    & .icons{
        width: 50%;
        height: 30vw; border-radius: 20px;
        background-image: url('/sponsor.jpg'); background-position: center;
        background-size: cover; background-repeat: no-repeat;
        /* display: grid; grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr;
        background-color: #e3e3e3; border-radius: 20px;
        & *{
            height: 90px; padding: 20px;
        } */
    }

    @media all and (max-width: 1024px){
        & .inner{
            flex-direction: column;
            margin-bottom: 100px;
        }
        & .box{
            &.text{
                padding-left: 25px; padding-right: 0;
                border-right: 0; border-left: 2px solid black;
                max-width: none;
                width: 90%;
                margin-bottom: 60px;
                & * {margin-bottom: 20px; line-height:1.3;}
                align-items: flex-start;
            }
            &.icons{
                height: 40vw;
                width: calc(90% + 25px);
            }
        }
    }
    @media all and (max-width: 500px){
        & .box.icons{
            height: 80vw;
        }
    }

`