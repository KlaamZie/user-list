import React, {useContext, useEffect, useState} from 'react';
import "../../styles/table/table.scss"
import "../../styles/table/modal.scss"
import {AppContext} from "../../context/AppContext";
import Row from "./Row/Row";
import Attributes from "./Attributes";
import getEmployees from "../../lib/getEmployees";
import Pagination from "./Pagination";
import RowSkeleton from "./Row/Row.skeleton";
import Skeleton from "react-loading-skeleton";
import Filters from "./Filters/Filters";
function Table(props) {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const {employees, setEmployees, page, setPage, setTotalPages, nat} = useContext(AppContext);

    const fetchData = async (data) => {
        let reset = false;
        setLoading(true);

        let newPage = null;
        let newNat = "";

        if(data) {
            if(data.newPage) {
                newPage = page + 1;
            }

            if(data.newNat !== undefined && data.newNat !== nat) {
                newNat = data.newNat;
                newPage = 1;
                reset = true;
            } else if (nat) {
                newNat = nat;
            }
        }



        const _employees = await getEmployees(newPage, newNat);

        if(reset) {
            setPage(1);
            setTotalPages(1);
            setEmployees(_employees);
        } else {
            setEmployees([...employees, ..._employees]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, []);

    const handleSelected = (employee) => {
        setSelected(employee);
    }

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
                <Filters fetchData={fetchData}/>
                <Attributes />
                {
                    loading && Array(12).fill(0, 0, 12).map((_, index) => {
                        return <React.Fragment key={index}>
                            <RowSkeleton />
                        </React.Fragment>
                    })
                }
                {
                    !loading && <>
                        {employees.slice((page - 1) * 12, page * 12).map(employee => {
                            return <React.Fragment key={employee.email}>
                                <Row employee={employee} handleSelected={handleSelected} loading={loading}/>
                            </React.Fragment>
                        })}
                    </>
                }

                <Pagination fetchData={fetchData}/>
            </div>
        </>
    );
}

export default Table;