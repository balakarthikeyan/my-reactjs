import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import EditUserComponent from "./EditUserComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;