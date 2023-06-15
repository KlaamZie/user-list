import "./styles/global.scss";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import EmployeesTable from "./components/Table/EmployeesTable";
import getName from "./lib/getName";
import {AppContext} from "./context/AppContext";
import getEmployees from "./lib/getEmployees";

export function App() {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [gender, setGender] = useState(null);
    const [nat, setNat] = useState(null);

    return <>
        <AppContext.Provider value={{
            employees,
            setEmployees,
            page,
            setPage,
            totalPages,
            setTotalPages,
            gender,
            setGender,
            nat,
            setNat
        }}>
            <Header />
            <EmployeesTable />
        </AppContext.Provider>
    </>;
}