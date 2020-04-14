import React from "react";
import KeyTable from "./KeyTable/KeyTable";
import KeyForm from "./KeyForm/KeyForm";


const KeyManagement = (props) => {
    return (
        <div>
            <KeyForm/>
            <KeyTable keys={props.keys}/>
        </div>
    )
};

export default KeyManagement;

