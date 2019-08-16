import React from 'react';
import MoviesCard from './moviesCard';
import { convertDate } from '../../utils/dateUtils';
import { moviePoster } from '../../utils/moviePoster';

export default function MoviesList({ movies }) {
    return (
        <div className="moviesList">
            {movies.map(movie => {
                return (
                    <MoviesCard
                        key={movie.movieId}
                        id={movie.movieId}
                        title={movie.title}
                        premiereDate={convertDate(movie.premiereDate)}
                        moviePoster={moviePoster(movie.movieImageUrl)}
                        description={movie.description}
                        durationMin={movie.durationMin}
                        cast={movie.cast}
                        director={movie.director}
                    />
                );
            })}
        </div>
    );
}
