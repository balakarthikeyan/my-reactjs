import { useRef } from "react";
import CustomInput from "./CustomInput";

const RefContainer = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <CustomInput ref={inputRef} placeholder="Enter text here" />
            <button onClick={handleFocus} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-6">Focus</button>
        </div>
    )
}
export default RefContainer