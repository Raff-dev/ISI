import styled from "styled-components";
import { useState } from "react";
import { Menu, Input, Button } from "semantic-ui-react";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`;

const StyledButton = styled(Button)`
    font-family: "Inter var, roboto, sans-serif";
    margin-top: 10px;
`;

const FullscreenDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(30, 41, 59);
    color: rgb(208, 212, 252);
    font-family: "Inter";
`;

const StyledMenu = styled(Menu)`
    font-family: "Inter var, roboto, sans-serif";
`;

const App = () => {
    const [input, setInput] = useState("");

    const sendInputToCamunda = () => {
        console.log(input);
        fetch("http://camunda:8888", {
            method: "POST",
            body: input,
        });
    };

    return (
        <FullscreenDiv>
            <StyledMenu color="violet" stackable inverted widths={5}>
                <Menu.Item onClick={console.log}>Documentation</Menu.Item>
                <Menu.Item onClick={console.log}>About</Menu.Item>
                <Menu.Item onClick={console.log}>Fake Button</Menu.Item>
            </StyledMenu>
            <StyledDiv>
                <Input size="huge" placeholder="Enter Recipe Name" onChange={(e) => setInput(e.target.value)} />
                <br />
                <StyledButton size="huge" color="violet" onClick={sendInputToCamunda}>
                    Get Recipe
                </StyledButton>
            </StyledDiv>
        </FullscreenDiv>
    );
};

export default App;
