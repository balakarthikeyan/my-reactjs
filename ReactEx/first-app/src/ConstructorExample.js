import React, { Component } from 'react';
import ReactDOM from 'react-dom';  

class ConstructorExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'www.javatpoint.com'
        }
        this.handleSetState = this.handleSetState.bind(this);
        this.forceUpdateState = this.forceUpdateState.bind(this);  
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);  
        this.input = React.createRef();  
    } 

    updateSubmit(event) {  
        alert('You have entered the Website Name successfully.');  
        event.preventDefault();  
    } 

    handleSetState() {
        this.setState({  
            data:"Its a best ReactJS tutorial"  
        });
        console.log(this.state)
    }

    forceUpdateState() {  
        this.forceUpdate(); 
        console.log("Force Update component"); 
    }

    // Update happens runs first
    // componentWillMount() { deprecated
    componentDidMount() {
        console.log("Constructor Did Mounted"); 
        this.setState({  
            newdata:"www.javatpoint.com/tutorial"  
        });   
    }

    shouldComponentUpdate(newProps, newState) {  
        return true;  
    }

    // Update happens runs last
    // componentWillUpdate(nextProps, nextState) { deprecated
    componentDidUpdate(prevProps, prevState) {
        console.log("Updating Component"); 
        console.log('prev Props', prevProps)
        console.log('prev State', prevState)
    }

    //Component Destroyed
    componentWillUnmount() {  
        console.log('Component will Unmounted!')  
    }

    findDomNodeHandler() {  
        var myDiv = document.getElementById('random');  
        ReactDOM.findDOMNode(myDiv).innerHTML = "Random number: " + Math.random();  
    }

    render() {
        return (
            <div className="App">
                <h2>React Constructor Example</h2>
                <h3 id="random">Random number: {Math.random()}</h3>
                <h1>Uncontrolled Form Example</h1> 
                <form onSubmit={this.updateSubmit}>   
                <label>Website Name: <input type="text" defaultValue={this.state.data} ref={this.input} /></label>
                <input type="submit" value="Submit" />
                </form>
                <button onClick={this.handleSetState}>SetState</button> <br/>
                <button onClick = {this.forceUpdateState}>ForceUpdate</button> <br/>
                <button onClick = {this.findDomNodeHandler}>Find DOM</button> <br/>          
            </div>
        );
    }
}
export default ConstructorExample; 