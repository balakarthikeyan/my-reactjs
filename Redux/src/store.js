import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Movies/movieSlice';
import counterReducer from './Counter/counterSlice';
import toggleReducer from './Toggle/toggleSlice';

export const store = configureStore({
    reducer: {
        moviestate: movieReducer,
        counter: counterReducer,
        toggle: toggleReducer,
    },
});