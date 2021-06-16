import React from 'react';
import PropTypes from 'prop-types';

function ListEmployees (props) {
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
                            <button onClick={()=>{props.deleteEmpFunction(row)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        
        );
}

ListEmployees.propTypes = {
    data : PropTypes.array,
    deleteEmpFunction: PropTypes.func.isRequired
}

// ListEmployees.propTypes = {
//   customProp: function (props, propName, componentName) {
//     if (!item.isValid(props[propName])) {
//       return new Error('Validation failed!');
//     }
//   }
// }

export default ListEmployees;