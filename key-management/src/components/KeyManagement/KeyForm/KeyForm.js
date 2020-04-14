import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const KeyForm = (props) => {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col lg="8">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="lbl-key-name">Key name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="example: service.purpose.version"
                            aria-label="Key name"
                            aria-describedby="lbl-key-name"
                        />
                        <Button onClick={() => alert("Pozdrav!")}>Create</Button>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
};

export default KeyForm;