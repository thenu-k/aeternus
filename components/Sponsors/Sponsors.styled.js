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
    }

    & .icons{
        width: 50%;
        height: 400px; border-radius: 20px;
        background-image: url('/sponsor.jpg'); background-position: center;
        background-size: cover; background-repeat: no-repeat;
        /* display: grid; grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr;
        background-color: #e3e3e3; border-radius: 20px;
        & *{
            height: 90px; padding: 20px;
        } */
    }

`