import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMessage } from './toggleSlice';

const Toggle = () => {
    const toggleMessageShow = useSelector((state) => state.toggle.toggleMessageShow); // Reads state
    const dispatch = useDispatch();

    return (
        <div>
            {toggleMessageShow && <p>Learning redux example</p>}
            <button onClick={() => dispatch(toggleMessage())}>Toggle</button>
        </div>
    );
};

export default Toggle;