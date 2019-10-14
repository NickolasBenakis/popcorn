import React, { Fragment } from 'react';
import MoviesCard from './moviesCard';
import { convertDate } from '../../utils/dateUtils';
import { moviePoster } from '../../utils/moviePoster';

function MoviesList({ movies }) {
    return (
        <Fragment>
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
        </Fragment>
    );
}
export default MoviesList;
