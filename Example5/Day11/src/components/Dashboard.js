import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
    console.log("Dashboard:", props)
    return ( 
        <>
            <div className="left width-3-4 no-gap">
                <h3>Dashboard</h3>
                <span className="right"></span>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
            <div className="left width-1-4 no-gap">
                <Sidebar {...props}/>
            </div>
        </>
        );
}
export default  Dashboard;