import React from "react";
import {CookiesProvider} from "react-cookie";
import App from "./App";

export default function Root() {
    return (
        <React.StrictMode>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </React.StrictMode>
    )
}