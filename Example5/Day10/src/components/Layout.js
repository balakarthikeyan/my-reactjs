import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar /> {/* static header */}
            <div style={{ display: "flex" }}>
                <div className="left width-3-4 no-gap">
                    <Outlet /> {/* dynamic content */}
                </div>
                <div className="right width-1-4 no-gap">
                    <div className="border">
                        <Sidebar /> {/* static sidebar */}
                    </div>
                </div>
            </div>
        </div>
    );
}