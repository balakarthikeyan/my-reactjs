const CustomInput = ({ ref, ...props }) => {
    return <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={ref} {...props} />;
};

export default CustomInput;
