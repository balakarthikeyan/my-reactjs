import React, { useState } from 'react';

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
}

function useBoolean(initialValue) {
    const [value, setValue] = useState(initialValue);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    return [value, setTrue, setFalse];
}

function SpoilerAlert() {
    // const [isVisible, setVisible] = useState(false);
    const [isVisible, toggleVisible] = useToggle(false);
    // const [isVisible, showModal, hideModal] = useBoolean(false);
    return (
        <div>
            {/* <button onClick={() => setVisible(!isVisible)}> */}
            <button onClick={toggleVisible}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <span>Testing Hooks</span>}
        </div>
    );
}
export default SpoilerAlert;