import React, { Component } from 'react';
class PrintName extends Component {
    render(){
        return (
            <strong>This is from Props : {this.props.personsName}</strong>
        )    
    }
}
export default PrintName;