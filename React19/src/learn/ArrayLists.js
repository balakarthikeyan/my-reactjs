import React, { Component } from 'react';

class ArrayLists extends Component {

    render() {
        console.log(this.props)
        const { contactlist } = this.props
        return (
            <div>
                {contactlist.map((list) => (
                    <li key={list}>{list}</li>
                ))}
            </div>
        );
    }
}

export default ArrayLists;