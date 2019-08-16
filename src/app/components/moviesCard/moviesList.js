import React from 'react';
import MoviesCard from './moviesCard';
import { convertDate } from '../../utils/dateUtils';

export default function MoviesList({ mockMovies }) {
    return (
        <div className="moviesList">
            {mockMovies.map(movie => {
                return (
                    <MoviesCard
                        key={movie.movieId}
                        id={movie.movieId}
                        title={movie.title}
                        premiereDate={convertDate(movie.premiereDate)}
                    />
                );
            })}
        </div>
    );
}
