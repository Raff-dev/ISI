import styled from "styled-components";
import { useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { Menu, Input, Button } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import axios from "axios";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`;

const FullscreenDiv = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(30, 30, 80);
    min-height: 100vh;
`;

const StyledMenu = styled(Menu)`
    font-weight: 500;
    font-size: 2rem;
`;

const ErrorMEssage = styled.p`
    color: red;
    font-size: 14px;
    font-weight: bold;
`;

const App = () => {
    const [username, setUsername] = useState("");
    const [drinkId, setDrinkId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [drinkData, setDrinkData] = useState(null);

    const sendEnquiry = () => {
        console.log(username, drinkId);
        if (!username || !drinkId) {
            setErrorMessage("Both username and drink ID are required.");
            return;
        }

        setErrorMessage("");
        let url = "http://localhost:8001/enquiry/";
        let data = { drink_id: drinkId, username: username };
        axios
            .post(url, data)
            .then((res) => {
                console.log("Success:", res);
                return res.data;
            })
            .then((data) => {
                console.log("Success:", data);
                setDrinkData(data);
            })
            .catch((error) => {
                setErrorMessage("Request was unsuccessful: " + error);
                console.error("Error:", error);
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
                {errorMessage ? <ErrorMEssage>{errorMessage}</ErrorMEssage> : null}
                <Input
                    size="huge"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <Input size="huge" placeholder="Enter Drink ID" onChange={(e) => setDrinkId(e.target.value)} required />
                <br />
                <Button size="huge" color="violet" onClick={sendEnquiry}>
                    GET RECIPE
                </Button>
                <br />
                {drinkData ? <JsonCard data={drinkData} /> : null}
            </StyledDiv>
        </FullscreenDiv>
    );
};

export default App;

const JsonCard = ({ data }) => {
    return (
        <Card
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.0)",
                borderRadius: "10px",
                width: "80%",
                margin: "2%",
            }}
        >
            <CardContent>
                <SyntaxHighlighter
                    language="json"
                    style={qtcreatorDark}
                    customStyle={{
                        opacity: "0.6",
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    {JSON.stringify(data, null, 2)}
                </SyntaxHighlighter>
            </CardContent>
        </Card>
    );
};
