import React from 'react';

import MoviesCard from './moviesCard';
export default function MoviesList({ mockMovies }) {

    // const cardsArray = robots.map(user => {
    //   return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    // })

    return (
        <div style={{ display: "flex", flexFlow: "row wrap", background: "whitesmoke" }}>
            {
                mockMovies.map(movie => {
                    return <MoviesCard key={movie.id} id={movie.id} title={movie.title} vote_average={movie.vote_average} />
                })
            }
        </div>
    );
}

