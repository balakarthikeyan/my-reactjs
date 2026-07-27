import React from 'react';

// The interface we define for properties to be handed to our child element. 
// The function signature is that for an onClick event handler
interface ChildProps {
    handleChildClick: (event: React.MouseEvent<HTMLElement>) => void
}

// Here we define our parent component, which will contain our child component.
const ParentComponent = () => {

    // This is the click handler in the parent, it will be triggered AFTER the child handler.
    const handleParentClick = (event: React.MouseEvent<HTMLElement>) => {
        // This is an important feature of event handling. We
        // know that events will be passed up the component 
        // hierarchy. However, we can stop and change this using
        // methods on the event which is emitted.
        event.stopPropagation()
        console.log("Parent component clicked")
    }

    // This is the child handler, it will be triggered BEFORE the parent handler.
    const handleChildClick = () => {
        console.log("Child component clicked")
    }

    // Now we defined the JSX which will be rendered, and pass an event handler to the child
    return (
        <div onClick={handleParentClick}>
            <ChildComponent handleChildClick={handleChildClick}></ChildComponent>
        </div>
    );

};

// This is our child component! We pass in the event handler from the parent.
const ChildComponent = (childProps: ChildProps) => {

    return (
        <>
            <button onClick={childProps.handleChildClick}>
                Child button
            </button>
        </>
    );
};

export default ParentComponent;