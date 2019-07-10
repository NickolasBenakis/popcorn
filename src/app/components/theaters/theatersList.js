import React from 'react';
import TheaterCard from './theaterCard.jsx';

export default function TheatersList({ mockTheaters }) {
    return (
        <div className="moviesList">
            {mockTheaters.map(theater => {
                return (
                    <TheaterCard
                        key={theater.id}
                        id={theater.id}
                        title={theater.title}
                    />
                );
            })}
        </div>
    );
}
