import getName from "./getName";
import {AppContext} from "../context/AppContext";
import {useContext} from "react";

export default function getEmployees(page, gender, nat) {
    let queryString = "https://randomuser.me/api/?results=12&seed=abc";

    if(page) {
        queryString += `&page=${page}`;
    }
    if(gender) {
        queryString += `&gender=${gender}`
    }
    if(nat) {
        queryString += `&nat=${nat}`;
    }

    const fetchData = async () => {
        const data = await fetch(queryString)
            .then(res => res.json())
            .then(res => res.results)
            .then(employees => {
                return employees.map(employee => {
                    return {
                        picture: employee.picture.large,
                        name: getName(employee.name.first, employee.name.last),
                        email: employee.email,
                        phone: employee.phone,
                        city: employee.location.city,
                        nationality: employee.nat,
                        gender: employee.gender
                    }
                })
            })

        return data;
    }

    return fetchData();
}