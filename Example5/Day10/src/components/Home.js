import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onClickGotoUrl = () => {
        navigate("/onclick");
    };

    return (
        <>
            <div className="border">
                <h3>Home</h3>
                <button onClick={onClickGotoUrl}>Go to URL</button>
            </div>
        </>
    );
};

export default Home;