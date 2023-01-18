import axios from "axios";
import { useState } from "react";
import { Button, Input, Menu } from "semantic-ui-react";
import { JsonCard } from "./JsonCard";
import { LanguagePicker } from "./LanguagePicker";
import {
    ErrorMEssage,
    FullscreenDiv,
    StyledCard,
    StyledDiv,
    StyledMenu,
} from "./Styles";

const CAMUNDA_URL =
    "http://localhost:8080/engine-rest/process-definition/key/Process_0j3mwpk/start";

const App = () => {
    const [username, setUsername] = useState("");
    const [drinkId, setDrinkId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [drinkData, setDrinkData] = useState(null);
    const [language, setLanguage] = useState("pl");

    const sendEnquiry = () => {
        console.log(username, drinkId);
        if (!username || !drinkId) {
            setErrorMessage("Both username and drink ID are required.");
            return;
        }
        // get current hour in integer
        setErrorMessage("");

        let data = {
            variables: {
                hour: { value: new Date().getHours().toString(), type: "Integer" },
                desired_language: { value: "en" },
            },
            withVariablesInReturn: true,
        };

        axios
            .post(CAMUNDA_URL, data)
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
                <StyledCard>
                    {errorMessage ? <ErrorMEssage>{errorMessage}</ErrorMEssage> : null}
                    <Input
                        size="huge"
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <Input
                        size="huge"
                        placeholder="Enter Drink ID"
                        onChange={(e) => setDrinkId(e.target.value)}
                        required
                    />
                    <br />
                    <LanguagePicker setLanguage={setLanguage} />
                    <br />
                    <Button size="huge" color="violet" onClick={sendEnquiry}>
                        GET RECIPE
                    </Button>
                    <br />
                    {drinkData ? <JsonCard data={drinkData} /> : null}
                </StyledCard>
            </StyledDiv>
        </FullscreenDiv>
    );
};

export default App;
