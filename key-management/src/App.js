import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyManagement from "./components/KeyManagement/KeyManagement";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function App() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Enigma</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
            <Container>
                <KeyManagement/>
            </Container>
        </div>
    );
}

export default App;
