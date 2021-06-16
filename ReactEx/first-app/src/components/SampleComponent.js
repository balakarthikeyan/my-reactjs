import React, { Component } from 'react';

class PrintName extends Component {
    render(){
        return (
            <strong>This is from Props : {this.props.personsName}</strong>
        )    
    }
}

class SampleComponent extends Component {
    render() { 
        const name = "Bala Karthikeyan";
        return ( 
            <div>
                <h2 className="bold red"> Hello from Component </h2>
                <PrintName personsName={name} />

                {
                    this.props.employeesObj.map( (row, index)=> {
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
 
export default SampleComponent;