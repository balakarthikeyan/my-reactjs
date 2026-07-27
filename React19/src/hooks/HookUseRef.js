import React, { useState, useRef } from "react";

const HookUseRef = () => {
    const countRef = useRef(0);
    const [forceRender, setForceRender] = useState(false);

    const increment = () => {
        countRef.current += 1;
        setForceRender((prev) => !prev);
    };

    return (
        <div>
            <h1>Count: {countRef.current}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default HookUseRef