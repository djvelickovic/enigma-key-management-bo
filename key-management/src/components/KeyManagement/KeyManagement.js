import React, {Component} from "react";
import KeyTable from "./KeyTable/KeyTable";
import KeyForm from "./KeyForm/KeyForm";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";
import {withCookies} from "react-cookie";

class KeyManagement extends Component {

    constructor(props) {
        super(props);
        this.state = { keys: []};
    }

    fetchKeys() {
        Axios.get("/keys")
            .then(response => {
                this.setState({keys: response.data})
            })
            .catch(response => {
                const alert = <Alert onClick={() => this.clearAlert()} variant="danger">Failed to load keys</Alert>
                this.setState({alert});
            })
    }

    updateKey(keyName, active) {
        Axios.put("/keys/"+keyName, {active: active})
            .then(response => {
                const keys = [...this.state.keys];
                const keyForUpdate = keys.find(k => k.name === keyName);
                keyForUpdate.active = active;
                this.setState({keys: keys});
            })
            .catch(response => {
                const alert = <Alert onClick={() => this.clearAlert()} variant="danger">Failed to load keys</Alert>
                this.setState({alert});
            })
    }

    clearAlert() {
        this.setState({alert: null})
    }

    createKey(keyName) {
        Axios.post("/keys", { name: keyName })
            .then(response => {
                const alert = <Alert onClick={() => this.clearAlert()} variant="success">Successfully created key {keyName}</Alert>
                this.setState({alert});
                this.fetchKeys();
            })
            .catch(error => {
                console.log(error.response);
                const alert = <Alert onClick={() => this.clearAlert()} variant="danger">Failed to create key {keyName}. Message {error.response.data.description}</Alert>
                this.setState({alert});
            })
    }

    componentDidMount() {
        this.fetchKeys();
    }

    render() {
        const alert = this.state.alert;
        return (
            <div>
                <KeyForm onCreate={(keyName) => this.createKey(keyName)}/>
                {alert}
                <KeyTable keys={this.state.keys} onUpdate={(keyName, active) => this.updateKey(keyName, active)}/>
            </div>
        )
    }
}

export default withCookies(KeyManagement);

