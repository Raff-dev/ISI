import { Menu } from "semantic-ui-react";
import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    border-radius: 10px;
`;

export const FullscreenDiv = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(30, 30, 80);
    min-height: 100vh;
`;

export const StyledMenu = styled(Menu)`
    font-weight: 500;
    font-size: 2rem;
`;

export const ErrorMEssage = styled.p`
    color: red;
    font-size: 14px;
    font-weight: bold;
`;

export const StyledCard = styled.div`
    background-color: rgba(50, 50, 100, 1);
    border-radius: 10px;
    width: 400px;
    margin: 20px;
    padding: 40px;
    border: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    border-radius: 10px;
`;
