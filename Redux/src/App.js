import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import rootReducer from './rootReducer';

// import Toggle from './Toggle/Toggle';
// import Counter from './Counter/Counter';
import MovieList from './Movies/MovieList';
import MovieDetail from './Movies/MovieDetail';

// Browser Redux DevTools configuration without third-party library dependency
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

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