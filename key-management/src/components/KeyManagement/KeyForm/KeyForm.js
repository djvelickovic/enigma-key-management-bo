import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class KeyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyName: "",
            size: 4096
        };
    }

    onKeyNameChange(keyName) {
        this.setState({keyName: keyName});
    }
    onKeySizeChange(size) {
        this.setState({size: size});
    }

    render() {
        const disabled = this.props.disabled
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="lbl-key-name">Key name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                disabled={disabled}
                                placeholder="example: service.purpose.version"
                                aria-label="Key name"
                                aria-describedby="lbl-key-name"
                                onChange={(e) => this.onKeyNameChange(e.target.value)}
                            />
                            <FormControl
                                disabled={disabled}
                                aria-label="Size"
                                as="select"
                                defaultValue={4096}
                                onChange={(e) => this.onKeySizeChange(e.target.value)}
                            >
                                <option value={2048}>2048 (Not secure)</option>
                                <option value={4096}>4096 (Standard)</option>
                                <option value={8192}>8192 (Secure)</option>
                                <option value={16384}>16384 (Top Secure)</option>
                            </FormControl>
                            <Button
                                disabled={disabled}
                                onClick={() => {
                                    this.props.onCreate(this.state.keyName, this.state.size);
                                    this.setState({keyName:""})
                                }}
                            >Create</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default KeyForm;