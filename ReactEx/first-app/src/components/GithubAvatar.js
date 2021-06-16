import React, { Component } from 'react';
import axios from 'axios';
class GithubAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            avatar: ''
        }
    }
    //only once 
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        const response = await axios.get(url)
        this.setState({
            user: response.data.login,
            avatar: response.data.avatar_url
        })
    }
    
    //calls after render methods , u can do comparision between the previous and current props and state
    componentDidUpdate(prevProps, prevState) {
        console.log('prev Props', prevProps)
        console.log('prev State', prevState)
    }

    render() {
        console.log(this.props.username)
        return (
            <div>
                <h1>Github User Details</h1>
                <h2>{this.state.user}</h2>
                <img src={this.state.avatar} alt={this.state.user} />
            </div>
        );
    }
} export default GithubAvatar;