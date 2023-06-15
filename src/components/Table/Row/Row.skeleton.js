import React from 'react';
import "../../../styles/table/row.scss"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function RowSkeleton() {
    return (
        <>
            <div className={"row table-layout"}>
                <p className={"item"}><Skeleton circle height={"3rem"} width={"3rem"}/></p>
                <p className={"item"}><Skeleton /></p>
                <p className={"item"}><Skeleton /></p>
                <p className={"item"}><Skeleton /></p>
                <p className={"item"}><Skeleton /></p>
                <p className={"item"}><Skeleton /></p>
            </div>
        </>
    );
}

export default RowSkeleton;