import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Poster } from './Movie';

const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		async function fetchMovie() {
			try {
				const res = await axios.get(`https://api.sampleapis.com/movies/action-adventure/${id}`);
				setMovie(res.data);
			} catch (err) {
				console.error('Error fetching movie details:', err);
			}
		}
		fetchMovie();
	}, [id]);

	if (!movie) return null;

	const backdrop = movie.images?.fanart || movie.posterURL;

	return (
		<div>
			<MovieWrapper backdrop={backdrop}>
				<MovieInfo>
					<Poster src={movie.posterURL || movie.images?.poster} alt={movie.title} />
					<Moveup>
						<h2>{movie.title}</h2>
					</Moveup>
				</MovieInfo>
			</MovieWrapper>
		</div>
	);
};

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 15%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -10rem;
  }
`;

const Moveup = styled.div`
  margin-top: -6rem;
`;