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

const DJANGO_URL = "http://localhost:8001/enquiry/";

const App = () => {
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [drinkData, setDrinkData] = useState(null);
    const [language, setLanguage] = useState("pl");

    const fetchEnquiry = () => {
        axios.get(DJANGO_URL).then((data) => {
            console.log(data);
            let drinkData = data.data[data.data.length - 1];
            drinkData.data = JSON.parse(drinkData.data);
            setDrinkData(drinkData);
        });
    };

    const sendEnquiry = () => {
        console.log(username, language);
        if (!username || !language) {
            setErrorMessage("Both username and language are required.");
            return;
        }
        // get current hour in integer
        setErrorMessage("");

        let options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json",
                withCredentials: true,
            },
            data: {
                variables: {
                    hour: { value: new Date().getHours().toString(), type: "Integer" },
                    desired_language: { value: language },
                    username: { value: username },
                },
                withVariablesInReturn: true,
            },
        };
        // fetchEnquiry();
        axios
            .post(CAMUNDA_URL, options)
            .then((res) => fetchEnquiry())
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
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <LanguagePicker setLanguage={setLanguage} />
                    <br />
                    <Button size="huge" color="violet" onClick={sendEnquiry}>
                        GET RECIPE
                    </Button>
                    <br />
                </StyledCard>
                {drinkData ? <JsonCard data={drinkData} /> : null}
            </StyledDiv>
        </FullscreenDiv>
    );
};

export default App;
