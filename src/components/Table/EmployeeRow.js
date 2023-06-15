import React from 'react';
import "../../styles/table/row.scss"
function EmployeeRow(props) {
    return (
        <>
            <div className={"row table-layout"}>
                <img className={"item"} src={props.employee.picture} alt={props.employee.name} />
                <p className={"item"}>{props.employee.name}</p>
                <p className={"item"}>{props.employee.email}</p>
                <p className={"item"}>{props.employee.phone}</p>
                <p className={"item"}>{props.employee.city}</p>
                <button className={"item item-button"} onClick={() => props.handleSelected(props.employee)}>More</button>
            </div>
        </>
    );
}

export default EmployeeRow;