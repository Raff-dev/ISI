import styled from "styled-components";
import { useState } from "react";
import { Menu, Input, Button } from "semantic-ui-react";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`;

const FullscreenDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(30, 30, 80);
`;

const StyledMenu = styled(Menu)`
    font-weight: 500;
    font-size: 2rem;
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
                <Button size="huge" color="violet" onClick={sendInputToCamunda}>
                    GET RECIPE
                </Button>
            </StyledDiv>
        </FullscreenDiv>
    );
};

export default App;

