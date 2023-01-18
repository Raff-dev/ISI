import React from "react";
import { Dropdown } from "semantic-ui-react";

const LANGUAGES = [
    { key: "en", text: "English", value: "en" },
    { key: "de", text: "German", value: "de" },
    { key: "fr", text: "French", value: "fr" },
    { key: "es", text: "Spanish", value: "es" },
    { key: "it", text: "Italian", value: "it" },
    { key: "pt", text: "Portuguese", value: "pt" },
    { key: "pl", text: "Polish", value: "pl" },
];

export const LanguagePicker = ({ setLanguage }) => {
    return (
        <Dropdown
            placeholder="Select Language"
            fluid
            selection
            defaultValue="pl"
            options={LANGUAGES}
            onChange={(e, { value }) => setLanguage(value)}
        />
    );
};
