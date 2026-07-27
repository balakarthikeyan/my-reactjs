import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

interface ListItems {
    items: Array<number>
}

// Here we define our state.
const List = (listItems: ListItems) => {
    // Here we introduce our state, along with a method for updating it.
    const [items, setItems] = useState(listItems.items)

    const handleClick = () => {
        setItems(items.concat(Math.random()))
    }

    // Here we map out each of our list items to JSX, which we can later render.
    const listItemsLi = items.map(num => <li key={num}>{num}</li>)

    return (
        <>
            <div>
                <h1>Our list goes here!</h1>
                <ul>
                    {listItemsLi}
                </ul>
                <button onClick={handleClick}>
                    Add an item!
                </button>
            </div>
        </>
    );
};

// Here we define our context. This is what we will pass around. It is implicitly a string with a default value.
const LevelContext = createContext("This should be overwritten");

// This is an empty component we use as a mid layer to demonstrate
// passing the context multiple layers without explicit props
const LevelTwo = () => {

    return (
        <LevelThree></LevelThree>
    )

};

// Finally we use the context in our third layer down. 
// Notice we need a function, and to tell it which context we are using
const LevelThree = () => {

    const level = useContext(LevelContext);

    return (
        <>
            <div>
                The level is {level}
            </div>
        </>
    )

};

const MyHooks = () => {

    // Here we declare our ref. As we are using Typescript and initialising with null we need to tell it what
    // type of ref we are expecting. The initialising with null is a common pattern and is updated below.
    const myRef = useRef(null);

    // An event handler used to focus on the input when we press the button
    const handleClick = () => {
        myRef.current?.focus()
    }

    // This is how we declare a function that will be executed post-render.
    useEffect(() => {
        console.log("This will render second")
    });

    // This is executed before/ as part of the rendering process
    console.log("This will render first")

    return (
        <>
            <List items={[1, 2, 3, 4]}></List>
            <button onClick={handleClick}>
                Press to focus!
            </button>
            {/* Here we pass in the reference and can use it to focus */}
            <input ref={myRef}></input>
            {/* This is our top level component. Here we declare a provider, which is what exposes the value to the lower levels */}
            <LevelContext.Provider value={"This is the level value"}>
                <LevelTwo></LevelTwo>
            </LevelContext.Provider>
        </>
    )

};

export default MyHooks;