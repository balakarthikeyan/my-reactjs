import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creator
export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async () => {
        // API Call
        const res = await axios.get('https://api.sampleapis.com/movies/action-adventure');
        return res.data;
    }
);

const movieSlice = createSlice({
    name: 'moviestate',
    initialState: {
        movies: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload || [];
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default movieSlice.reducer;