import useToggle from "./CustomHook";

const ToggleExample = () => {
    const { show, toggle } = useToggle(true);
    return (
        <div>
            <h1>Toggle Custom Hook</h1>
            <button className='btn' onClick={toggle}>
                Toggle Button
            </button>
            {show && <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor rutrum enim sit amet blandit. </h4>}
        </div>
    )
}

export default ToggleExample;