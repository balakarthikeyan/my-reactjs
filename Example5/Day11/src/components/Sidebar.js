import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Sidebar extends Component {

    logout = () => {
        localStorage.removeItem('isAuthenticated');
        this.setState({
            isAuthenticated: false,
        }, () => {
            this.props.navigate("/")
        });
    }

    render() {
        console.log("From Sidebar:", this.props)
        return (
            <>
                <div className="border">
                    <h2>Side menu</h2>
                    <div className="side-bar">
                        <Link className="side-link" to="/dashboard">Dashboard</Link>
                        {
                            this.props.isAuthenticated && <Link className="side-link" to="#" onClick={this.logout}>Logout</Link>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Sidebar;