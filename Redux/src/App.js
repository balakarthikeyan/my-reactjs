import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// import Toggle from './Toggle/Toggle';
// import Counter from './Counter/Counter';
import MovieList from './Movies/MovieList';
import MovieDetail from './Movies/MovieDetail';

function App() {
    return (
        <Provider store={store}>
            <Router>
                {/* <Toggle/> */}
				{/* <Counter/> */}
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/:id" element={<MovieDetail />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;