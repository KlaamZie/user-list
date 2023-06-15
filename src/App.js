import "./styles/global.scss";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import Table from "./components/Table/Table";
import getName from "./lib/getName";
import {AppContext} from "./context/AppContext";
import getEmployees from "./lib/getEmployees";

export function App() {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [nat, setNat] = useState("");

    return <>
        <AppContext.Provider value={{
            employees,
            setEmployees,
            page,
            setPage,
            totalPages,
            setTotalPages,
            nat,
            setNat
        }}>
            <Header />
            <Table />
        </AppContext.Provider>
    </>;
}