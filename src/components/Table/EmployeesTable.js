import React, {useContext, useEffect, useState} from 'react';
import "../../styles/table/table.scss"
import "../../styles/table/modal.scss"
import {AppContext} from "../../context/AppContext";
import EmployeeRow from "./EmployeeRow";
import Attributes from "./Attributes";
import getEmployees from "../../lib/getEmployees";
import Pagination from "./Pagination";
import EmployeeRowSkeleton from "./EmployeeRow.skeleton";
import Skeleton from "react-loading-skeleton";
function EmployeesTable(props) {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const {employees, setEmployees, page} = useContext(AppContext);

    const fetchData = async (page, gender, nat) => {
        setLoading(true);
        const data = await getEmployees(page, gender, nat);

        setEmployees([...employees, ...data]);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, []);

    const handleSelected = (employee) => {
        setSelected(employee);
    }

    console.log(Array(12).fill(0, 0, 12))

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
                {
                    loading && Array(12).fill(0, 0, 12).map((_, index) => {
                        return <React.Fragment key={index}>
                            <EmployeeRowSkeleton />
                        </React.Fragment>
                    })
                }
                {
                    !loading && <>
                        {employees.slice((page - 1) * 12, page * 12).map(employee => {
                            return <React.Fragment key={employee.email}>
                                <EmployeeRow employee={employee} handleSelected={handleSelected} loading={loading}/>
                            </React.Fragment>
                        })}
                    </>
                }

                <Pagination fetchData={fetchData}/>
            </div>
        </>
    );
}

export default EmployeesTable;