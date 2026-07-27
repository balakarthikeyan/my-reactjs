import React, { Component } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { withRouter } from './withRouter';

class Login extends Component {
    state = {
        email: "",
        password: "",
        alert: ""
    }
    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.navigate("/dashboard")
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.email === "") {
            return this.setState({
                alert: "Please enter the email"
            })
        }
        if (this.state.password === "") {
            return this.setState({
                alert: "Please enter the password"
            })
        }

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.setState({
            alert: ""
        });

        this.props.authCheck(userData, this.props.navigate);
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onCancel = (e) => {
        e.preventDefault()
        this.props.navigate("/");
    }
    render() {
        console.log("Login:", this.props)
        const alert = (this.state.alert !== '') ? this.state.alert : this.props.alert;
        return (
            <div className="grid">
                <div className="border">
                    <h3>Login</h3>
                    {alert.length !== 0 ? <p style={{ color: "red" }}>{alert}</p> : null}
                    <form onSubmit={this.onSubmit}>
                        <div className="border left">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Please add your email" onChange={this.onInputChange} />
                        </div>
                        <div className="clear"></div>
                        <div className="border left">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Please add your password" onChange={this.onInputChange} />
                        </div>
                        <div className="clear"></div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={(e) => this.onCancel(e)}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);