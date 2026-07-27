import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(`Effect ran. Count is: ${count}`);

        return () => {
            console.log("Cleanup for previous effect");
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
};

export default HookUseEffect