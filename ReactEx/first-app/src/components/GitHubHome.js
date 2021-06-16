import React, { Component } from 'react';
import Axios from 'axios';
import GitHubGrid from './GitHubGrid';

class GitHubHome extends Component {
    state = {
        selected : "Java",
        data: []
    }
    componentDidMount() {
        console.log("Component Home Updated");
        this.fetchApi(this.state.selected)        
    }
    selectLang = (lang) =>{
        this.setState({
            selected: lang
        }, () => {
            this.fetchApi(this.state.selected)
        })
    }
    fetchApi = (lang) => {
        Axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories')
        .then((response) => {
            this.setState({
                data: response.data.items
            })
            //console.log(this.state.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const { data , selected } = this.state;
        const langs = ["Java", "JavaScript", "Python", "All"];
        return ( 
            <React.Fragment>
                <h1>Welcome to GitHub</h1>
                {
                    langs.map((row, index) => {
                        return <span className="tabs" 
                        style={
                            {color: (row === selected) ? "red" : "black"}
                        } key={index} onClick={() =>this.selectLang(row)}>{row}</span>
                    })
                }
                <GitHubGrid data={data} />
            </React.Fragment>
        );
    }
}

export default GitHubHome;