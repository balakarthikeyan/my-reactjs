import React from 'react';
import logo from '../logo.svg';
export default function Header (props) {
    return ( 
        <header className="App-header">
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="App-logo" alt="logo" width="50" />
                <span>Learn React</span>
            </a>
        </header>
        );
}

