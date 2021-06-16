import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Home = (props) => {
    const onClickGotoUrl = () => {
        props.history.push("/onclick")
    }
    return ( 
        <>
            <div className="left width-3-4 no-gap">
                <h3>Home</h3>
                <button onClick={onClickGotoUrl}>Go to URL</button>
            </div>
            <div className="right width-1-4 no-gap">
                <Sidebar />
            </div>
        </>
        );
}
export default  Home;