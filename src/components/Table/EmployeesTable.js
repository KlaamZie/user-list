import React, {useContext, useEffect, useState} from 'react';
import "../../styles/table/table.scss"
import "../../styles/table/modal.scss"
import {AppContext} from "../../context/AppContext";
import EmployeeRow from "./EmployeeRow";
import Attributes from "./Attributes";
import getEmployees from "../../lib/getEmployees";
function EmployeesTable(props) {
    const [selected, setSelected] = useState(null);
    const {employees, setEmployees} = useContext(AppContext);

    const fetchData = async (page, gender, nat) => {
        const data = await getEmployees(page, gender, nat);

        setEmployees(data);
    }

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, []);

    const handleSelected = (employee) => {
        console.log("hey")
        setSelected(employee);
    }
    /*
    * Photo
    * Name
    * Email
    * Phone
    * City
    * Nationality
    * */
    return (
        <>
            {
                selected && <div className={"modal"}>
                    <div className={"modal-content"}>
                        <span className={"close"} onClick={() => setSelected(null)}>&times;</span>
                        <img src={selected.picture} alt={selected.name} />
                        <p>{selected.name}</p>
                        <p>{selected.email}</p>
                        <p>{selected.phone}</p>
                        <p>{selected.city}</p>
                    </div>
                </div>
            }
            <div className={"table-container"}>
                <Attributes />
                {employees.map(employee => {
                    return <React.Fragment key={employee.email}>
                        <EmployeeRow employee={employee} handleSelected={handleSelected}/>
                    </React.Fragment>
                })}
            </div>
        </>
    );
}

export default EmployeesTable;