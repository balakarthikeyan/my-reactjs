import React, { useEffect } from 'react';
import Movie from './Movie';
import styled from 'styled-components';
import { getMovies } from './movieSlice';
import { useSelector, useDispatch } from 'react-redux';

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, status, error } = useSelector((state) => state.moviestate);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getMovies());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <div>Loading movies...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    if (!movies || movies.length === 0) return <div>No movies found.</div>;

    return (
        <MovieGrid>
            {movies.map((movie) => (
                <Movie key={movie.id || movie._id} movie={movie} />
            ))}
        </MovieGrid>
    );
};

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;