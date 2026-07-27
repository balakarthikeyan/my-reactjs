import React, { Component } from 'react';

class ObjectArray extends Component {

    render() {
        const { objectlist } = this.props
        let friend = objectlist.filter((list) => list.friend === true)
        let nonFriend = objectlist.filter((list) => list.friend !== true)
        console.log(this.props)

        return (
            <div>
                <h1>Ongoing</h1>
                <ul>
                    {friend.map((list, index) => (
                        <li key={index}>{list.name}</li>
                    ))}
                </ul>
                <h1>Completed</h1>
                <ol>
                    {nonFriend.map((list, index) => (
                        <li key={index}>{list.name}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default ObjectArray;