import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyManagement from "./components/KeyManagement/KeyManagement";
import Container from "react-bootstrap/Container";

const MOCKED_KEYS = [
    {
        name: "key1",
        created: "2020-04-13T19:24:05.66948",
        active: true
    },
    {
        name: "key2",
        created: "2020-04-14T18:30:40.393894",
        active: true
    }
];

function App() {
    return (
        <div>
            <Container>
                <KeyManagement keys={MOCKED_KEYS}/>
            </Container>
        </div>
    );
}

export default App;
