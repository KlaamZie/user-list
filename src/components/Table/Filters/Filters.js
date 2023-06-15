import React from 'react';
import "../../../styles/table/filters.scss"

import Nationality from "./Nationality";

function Filters(props) {
    return (
        <div className={"filters"}>
            <h2>Filters</h2>
            <div className={"filters-layout"}>
                <Nationality {...props}/>
            </div>
        </div>
    );
}

export default Filters;