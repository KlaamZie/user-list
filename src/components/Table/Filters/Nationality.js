import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

function Nationality(props) {
  const { nat, setNat } = useContext(AppContext);

  const [nationalities, setNationalities] = useState([
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IN",
    "IR",
    "MX",
    "NL",
    "NO",
    "NZ",
    "RS",
    "TR",
    "UA",
    "US",
  ]);

  const handleSelect = (e) => {
    setNat(e.target.value);
    props.fetchData({ newNat: e.target.value });
  };

  return (
    <div className={"filter filter-nationality"}>
      <label htmlFor="nationality">Nationality :</label>
      <select
        name="nationality"
        id="nationality"
        value={nat}
        onChange={(e) => handleSelect(e)}
      >
        <option value="">All</option>
        {nationalities.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Nationality;
