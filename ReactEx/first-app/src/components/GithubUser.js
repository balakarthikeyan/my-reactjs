import React from 'react';
import PropTypes from 'prop-types';

export default function GithubUser (props) {
    const row = props.data
    return ( 
            <div className="users">
                <img src={row.owner.avatar_url} style={{height:"150px"}} alt="" />
                <h4>{row.name}</h4>
                <p>{row.description}</p>
            </div>
        );
}

GithubUser.propTypes = {
    data :PropTypes.object,
}