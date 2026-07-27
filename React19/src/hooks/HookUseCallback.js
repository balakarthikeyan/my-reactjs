import { useState, useCallback } from "react";

const HookUseCallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    );
};

export default HookUseCallback