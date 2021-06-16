import React, { Component } from 'react';
class CreateContact extends Component {
    state ={
        name: "", 
        company : "", 
        experience : "", 
        email : "", 
        phone : "",
        alert : ""
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.name === "") {
            return this.setState({
                alert: "Please enter the name"
            })
        }
        if(this.state.email === "") {
            return this.setState({
                alert: "Please enter the email"
            })
        }
        if(this.state.phone === "") {
            return this.setState({
                alert: "Please enter the phone"
            })
        }
        const newEmployee  ={
            name: this.state.name,
            company : this.state.company,
            experience : this.state.experience,
            email : this.state.email, 
            phone : this.state.phone
        }
        this.props.saveEmpFunction(newEmployee);
        this.props.showAllFunction();
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })        
    }
    onCancel = (e) => {
        e.preventDefault()
        this.props.showAllFunction();       
    }
    componentDidMount() {
        console.log("After Render Method Execution performed")
    }
    componentDidUpdate() {
        console.log("While Updating")
    } 
    componentWillUnmount() {
        console.log("After Unmount the component")
    }        
    render() {
        const {name, company, experience, email, phone, alert} = this.state
        const {onSubmit, onCancel} = this
        console.log("Rendering the component")
        return ( 
            <div>
                <h1>Add a contact</h1>
                {alert.length !==0 ? <p style={{color: "red"}}>{alert}</p> : null }
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Please add your name" onChange={this.onInputChange} />
                    <input type="email" name="email" placeholder="Please add your email" onChange={this.onInputChange} />
                    <input type="tel" name="phone" placeholder="Please add your mobile" onChange={this.onInputChange} />
                    <input type="text" name="company" placeholder="Please add your company" onChange={this.onInputChange} />
                    <input type="text" name="experience" placeholder="Please add your experience" onChange={this.onInputChange} />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={(e)=> onCancel(e)}>Cancel</button>
                </form>
            </div>            
        );
    }
}

export default CreateContact;