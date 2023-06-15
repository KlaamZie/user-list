import React, {useContext} from 'react';
import {AppContext} from "../../context/AppContext";
import "../../styles/table/pagination.scss"

function Pagination(props) {
    const {page, setPage, totalPages, setTotalPages, employees} = useContext(AppContext);

    const handlePrevious = () => {
        if(page !== 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        setPage(page + 1);

        if(page + 1 > totalPages) {
            props.fetchData({newPage: true});
            setTotalPages(totalPages + 1);
        }

        window.scrollTo(0, 0);
    };

    return (
        <div className={"pagination"}>
            <button onClick={() => {handlePrevious()}}>Previous</button>
            <span>{page}</span>
            <button onClick={() => {handleNext()}}>Next</button>
        </div>
    );
}

export default Pagination;