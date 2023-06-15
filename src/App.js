import "./styles/global.scss";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import EmployeesTable from "./components/Table/EmployeesTable";
import getName from "./lib/getName";
import {AppContext} from "./context/AppContext";
import getEmployees from "./lib/getEmployees";

export function App() {
    const [employees, setEmployees] = useState([]);
    const [pages, setPages] = useState(0);

    return <>
        <AppContext.Provider value={{
            employees,
            setEmployees,
            pages,
            setPages
        }}>
            <Header />
            <EmployeesTable />
        </AppContext.Provider>
    </>;
}