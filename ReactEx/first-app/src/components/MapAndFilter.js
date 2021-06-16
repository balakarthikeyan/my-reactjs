import React , { Component } from "react";

class MapAndFilter extends Component {
    render() {
        const friends = [
            {
                name: "vivek",
                emal: "vivek@xyz.com",
                isFriend: true
            },
            {
                name: "Sathis",
                emal: "sathis@xyz.com",
                isFriend: false
            }
        ];
        const isFriend = friends.filter((find)=>{ return find.isFriend=== true})
        const notaFriend = friends.filter((find)=>{ return find.isFriend=== false})
        return (
            <div>   
                <h1>is Friend</h1>
                {isFriend.map( (row, index)=> {
                    return (
                        <div key={index}>
                            <h4>{index+1}</h4>
                            <p>{row.name}</p>
                            <p>{row.email}</p>
                        </div>
                    )
                    
                })}
                <h1>Not a Friend</h1>
                {notaFriend.map( (row, index)=> {
                    return (
                        <div key={index}>
                            <h4>{index+1}</h4>
                            <p>{row.name}</p>
                            <p>{row.email}</p>
                        </div>
                    )
                    
                })}
            </div>
        )
    }
}

export default MapAndFilter;