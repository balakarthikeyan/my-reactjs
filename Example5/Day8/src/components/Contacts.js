import React from 'react';
import PropTypes from 'prop-types';

function Contacts (props) {
    const allEmployees = props.data
    return ( 
        <div>
            <h2 className="bold red"> All Employees </h2>
            {
                allEmployees.map( (row, index)=> {
                    return (
                        <div key={index} className="border">
                            <h4>{index+1}</h4>
                            <p>{row.name}</p>
                            <p>{row.company}</p>
                            <button onClick={()=>{props.delEmpFunction(row)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        
        );
}

Contacts.propTypes = {
    data :PropTypes.array,
    delEmpFunction: PropTypes.func.isRequired
}

export default Contacts;