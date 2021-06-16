import React , { Component } from "react";

class Persons extends Component {
    render() {
        const {friends} = this.props
        const isFriend = friends.filter((find)=>{ return find.isFriend=== true})
        const notaFriend = friends.filter((find)=>{ return find.isFriend=== false})
        return (
            <div>   
                <h1>Friends</h1>
                {isFriend.map( (row, index)=> {
                    return (
                        <div key={index}>
                            <h4>{index+1}</h4>
                            <p>{row.name}</p>
                            <p>{row.email}</p>
                        </div>
                    )
                    
                })}
                <h1>Non Friends</h1>
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

export default Persons;