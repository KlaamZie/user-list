import "./styles/global.scss";
import { Header } from "./components/Header";
import { useState } from "react";
import Table from "./components/Table/Table";
import { AppContext } from "./context/AppContext";

export function App() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nat, setNat] = useState("");

  return (
    <>
      <Header />
      <AppContext.Provider
        value={{
          employees,
          setEmployees,
          page,
          setPage,
          totalPages,
          setTotalPages,
          nat,
          setNat,
        }}
      >
        <Table />
      </AppContext.Provider>
    </>
  );
}
