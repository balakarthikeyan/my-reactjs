import React from 'react';
import { useParams } from "react-router-dom";

export default function User() {
    const { id } = useParams();   // get the dynamic route param

    return (
        <>
            <div className="border">
                <h3>User is {id}</h3>
            </div>
        </>
    );
}
