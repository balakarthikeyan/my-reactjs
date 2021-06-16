import React, { Component } from 'react';
import GithubUser from './GithubUser';

class GitHubGrid extends Component {
    componentDidMount() {
        console.log("Component Grid Updated");
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
                        return <GithubUser key={index} data = {row} />
                    })}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default GitHubGrid;