import React from 'react';
import MoviesCard from './moviesCard';

export default function MoviesList({ mockMovies }) {

    return (
        <div className="moviesList">
            {
                mockMovies.map(movie => {
                    return <MoviesCard key={movie.id} id={movie.id} title={movie.title} vote_average={movie.vote_average} />
                })
            }
        </div>
    );
}

