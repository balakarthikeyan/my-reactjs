import React, { Component } from 'react';
import User from './User';

class Grid extends Component {
    componentDidMount() {
        console.log("Component Updated");
    }    
    render() {
        const records = this.props.data;
        //console.log(records);
        return ( 
            <React.Fragment>
                <h2>Users</h2>
                {
                    records.length === 0 ? <span>Loading....</span> :
                    <div className="grid">
                    {records.map((row, index) => {
                        return <User key={index} data = {row} />
                    })}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Grid;