import React from 'react';
import AppRouter from "./components/user/RouterComponent";
import NavBar from "./components/user/Navbar";
import Container from '@material-ui/core/Container';

function App() {
    return (
        <div>
            <NavBar/>
            <Container>
                <AppRouter/>
            </Container>
        </div>
    );
}

export default App;
