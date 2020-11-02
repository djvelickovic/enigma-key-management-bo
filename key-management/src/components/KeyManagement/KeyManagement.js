import React, {Component} from "react";
import KeyTable from "./KeyTable/KeyTable";
import KeyForm from "./KeyForm/KeyForm";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";
import {withCookies} from "react-cookie";
import Spinner from "react-bootstrap/Spinner";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class KeyManagement extends Component {

    constructor(props) {
        super(props);
        this.state = { keys: []};
    }

    fetchKeys() {
        this.setState({loading: true})
        Axios.get("/keys")
            .then(response => {
                this.setState({keys: response.data, loading: false})
            })
            .catch(response => {
                const alert = <Alert onClick={() => this.clearAlert()} variant="danger">Failed to load keys</Alert>
                this.setState({alert, loading: false});
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
        this.setState({
            alert: null,
            loading: false
        })
    }

    createKey(keyName, size) {
        this.setState({loading: true});
        Axios.post("/keys", { name: keyName, size: size })
            .then(response => {
                const alert = <Alert onClick={() => this.clearAlert()} variant="success">Successfully created key {keyName}</Alert>
                this.setState({alert});
                this.setState({loading: false});
                this.fetchKeys();
            })
            .catch(error => {
                console.log(error.response);
                const alert = <Alert onClick={() => this.clearAlert()} variant="danger">Failed to create key {keyName}. Message {error.response.data.description}</Alert>
                this.setState({alert});
                this.setState({loading: false});
            })
    }

    componentDidMount() {
        this.fetchKeys();
    }

    render() {
        const alert = this.state.alert;
        const loading = this.state.loading;
        const spinner = this.state.loading ? <Row><Col className={"col-sm-1 mx-auto"}><Spinner animation={"border"} variant={"primary"} size={"lg"} role={"status"} /></Col></Row> : null;
        return (
            <div>
                <KeyForm disabled={loading} onCreate={(keyName, size) => this.createKey(keyName, size)}/>
                {spinner}
                {alert}
                <br/>
                <KeyTable keys={this.state.keys} onUpdate={(keyName, active) => this.updateKey(keyName, active)}/>
            </div>
        )
    }
}

export default withCookies(KeyManagement);

