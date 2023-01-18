import { Card, CardContent } from "@material-ui/core";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const JsonCard = ({ data }) => {
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
