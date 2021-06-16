import React from 'react';
import {Route} from "react-router-dom"

import Sidebar from './sidebar/Sidebar';

export default function Login (props) {
    return ( 
            <div className="grid">
                <div className="border">
                    <h3>Login</h3>
                </div>
                <div className="border">
                    <h3>Signup</h3>
                </div>
                <div className="border">
                    <Sidebar />
                </div>               
            </div>
        );
}
