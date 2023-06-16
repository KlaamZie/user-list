import users from "./mocks/users.json";
import getEmployees from "../lib/getEmployees";
import { act, render } from "@testing-library/react";
import { AppContext } from "../context/AppContext";
import Row from "../components/Table/Row/Row";
import Table from "../components/Table/Table";

let employees = [];
const setEmployees = jest.fn();
let page = 1;
const setPage = jest.fn();
let totalPages = 1;
const setTotalPages = jest.fn();
let nat = "";
const setNat = jest.fn();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(users),
  })
);

// afterEach(() => {
//   jest.clearAllMocks();
// });

describe("API Call", function () {
  it("should return data", async function () {
    expect.assertions(1);
    await getEmployees();
    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc"
    );
  });

  it("should query data with nat", async function () {
    expect.assertions(1);
    nat = "US";
    await getEmployees(page, nat);
    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&nat=us&page=1"
    );
  });

  it("should query data with page", async function () {
    await getEmployees(page);
    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&page=1"
    );

    page = 2;
    await getEmployees(page);
    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&page=2"
    );
  });
});

describe("Table", function () {
  it("should render correctly", async function () {
    act(() => {
      render(
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
      );
    });
    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&page=1"
    );
  });

  it("should render rows correctly", async function () {
    const fetchData = await getEmployees(page, nat);
    expect(fetchData.length).toBe(12);

    act(() => {
      render(
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
      );
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&page=1"
    );

    const rows = document.querySelectorAll(".row");
    expect(rows.length).toBe(12);
  });

  it("should contain correct data in row", async function () {
    const fetchData = await getEmployees(page, nat);
    expect(fetchData.length).toBe(12);

    act(() => {
      render(
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
          <Row employee={fetchData[0]} />
        </AppContext.Provider>
      );
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=12&seed=abc&page=1"
    );

    const items = document.querySelectorAll(".item");
    expect(items.length).toBe(6);
    expect(items[1].textContent).toBe(fetchData[0].name);
  });
});
