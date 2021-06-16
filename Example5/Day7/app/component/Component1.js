import React, { Component } from 'react';
import PrintName from './PrintName';

class Component1 extends Component {
    render() { 
        const name = "Bala Karthikeyan";
        return ( 
            <div>
                <h2 className="bold red"> Hello from Component </h2>
                <PrintName personsName={name} />

                {
                    this.props.personsObj.map( (row, index)=> {
                        return (
                            <div key={index} className="border">
                                <h4>{index+1}</h4>
                                <p>{row.name}</p>
                                <p>{row.company}</p>
                            </div>
                        )
                    })
                }                
            </div>
            
         );
    }
}
 
export default Component1;