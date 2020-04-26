import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Keycloak from "keycloak-js";
import Root from "./Root";

const initOptions = {url: "http://localhost:12080/auth", clientId: "backoffice", realm: "enigma"};
const keycloak = Keycloak(initOptions);

keycloak.init({onLoad: "login-required"}).then((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    //React Render
    ReactDOM.render(
        <Root/>,
        document.getElementById('root')
    );

    localStorage.setItem("react-token", keycloak.token);
    localStorage.setItem("react-refresh-token", keycloak.refreshToken);

    setTimeout(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log(keycloak.token);
                console.log(keycloak.refreshToken);
                console.debug("Token refreshed" + refreshed);
            } else {
                console.warn("Token not refreshed, valid for "
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch((reason) => {
            console.error("Failed to refresh token " + reason);
        });


    }, 60000)

}).catch((reason) => {
    console.error("Authenticated Failed " + reason);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
