import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
    // Safe extraction for fallback images
    const posterUrl = movie.posterURL || movie.images?.poster || 'https://via.placeholder.com/200x250?text=No+Image';
    const movieId = movie.id || movie._id;

    return (
        <Link to={`/${movieId}`}>
            <Poster src={posterUrl} alt={movie.title || 'Movie Poster'} />
        </Link>
    );
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  width: 200px;
  height: 250px;
  object-fit: cover;
`;