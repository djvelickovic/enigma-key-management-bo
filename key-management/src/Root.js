import React from "react";
import {CookiesProvider} from "react-cookie";
import App from "./App";

export default function Root(props) {
    return (
        <React.StrictMode>
            <CookiesProvider>
                <App onLogout={() => props.onLogout()}/>
            </CookiesProvider>
        </React.StrictMode>
    )
}