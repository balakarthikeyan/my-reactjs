import React, { useContext  } from 'react';

const NumberContext = React.createContext();

function Display() {
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
    // return (<NumberContext.Consumer>{value => <div>The answer by {value}.</div>}</NumberContext.Consumer>);
}

function SpoilerDisplay() {
    return (
        <NumberContext.Provider value={42}>
          <div>
            <Display />
          </div>
        </NumberContext.Provider>
    );
}
export default SpoilerDisplay;