import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment/moment";

const KeyTable = (props) => {
    const keys = props.keys.map((key, index) =>
        (<tr key={index}>
            <td>{index}</td>
            <td>{key.name}</td>
            <td>{key.padding}</td>
            <td>{key.blockCipherMode}</td>
            <td>{key.size}</td>
            <td>{moment(key.created).format("DD-MM-yyyy HH:mm")}</td>
            <td>{moment(key.updated).format("DD-MM-yyyy HH:mm")}</td>
            <td>{key.active ? "Yes" : "No"}</td>
            <td><Button variant="secondary" onClick={() => props.onUpdate(key.name, !key.active)} block>{key.active ? "Deactivate" : "Activate"}</Button></td>
        </tr>)
    );

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Key Name</th>
                    <th>Padding</th>
                    <th>Block Cipher Mode</th>
                    <th>Size</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Active</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {keys}
                </tbody>
            </Table>
        </div>
    )
};

export default KeyTable;

