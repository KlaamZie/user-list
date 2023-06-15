import React from 'react';
import "../../styles/table/attributes.scss"

function Attributes(props) {
    return (
        <div className={"attributes table-layout"}>
            <p className={"item"}></p>
            <p className={"item"}>Name</p>
            <p className={"item"}>Email</p>
            <p className={"item"}>Phone</p>
            <p className={"item"}>City</p>
        </div>
    );
}

export default Attributes;