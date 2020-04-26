import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyManagement from "./components/KeyManagement/KeyManagement";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Axios from "axios";
import {withCookies} from 'react-cookie';



class App extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        Axios.interceptors.request.use(function (config) {
            config.headers = {
                ...config.headers,
                "Authorization": "Bearer ".concat(localStorage.getItem("react-token")),
                "X-XSFR-TOKEN": cookies.get("XSRF-TOKEN")
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
    }

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Enigma</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
}

export default withCookies(App);