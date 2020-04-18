import React, {Component} from "react";
import KeyTable from "./KeyTable/KeyTable";
import KeyForm from "./KeyForm/KeyForm";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";


class KeyManagement extends Component {

    constructor(props) {
        super(props);
        this.state = { keys: []};
    }

    fetchKeys() {
        Axios.get("/enigma/keys")
            .then(response => {
                this.setState({keys: response.data})
            })
            .catch(response => {
                const alert = <Alert variant="danger">Failed to load keys</Alert>
                this.setState({alert});
                setTimeout(() => this.clearAlert(), 3000);
            })
    }

    clearAlert() {
        this.setState({alert: null})
    }

    createKey(keyName) {
        Axios.post("/enigma/keys", { name: keyName })
            .then(response => {
                const alert = <Alert variant="success">Successfully created key {keyName}</Alert>
                this.setState({alert});
                setTimeout(() => this.clearAlert(), 3000);
                this.fetchKeys();
            })
            .catch(response => {
                const alert = <Alert variant="danger">Failed to create key {keyName}</Alert>
                this.setState({alert});
                setTimeout(() => this.clearAlert(), 3000);
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
                <KeyTable keys={this.state.keys}/>
            </div>
        )
    }
}

export default KeyManagement;

