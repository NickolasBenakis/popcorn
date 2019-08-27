import React from 'react';
import TheaterCard from './theaterCard.jsx';

function TheatersList({ auditoriums }) {
    return (
        <div className="theatersList">
            {auditoriums.map(auditorium => {
                return (
                    <TheaterCard
                        key={auditorium.auditoriumId}
                        id={auditorium.auditoriumId}
                        name={auditorium.name}
                        description={auditorium.description}
                        totalSeats={auditorium.totalSeats}
                        seats={auditorium.seats}
                        movieShowing={auditorium.movieShowing}
                    />
                );
            })}
        </div>
    );
}

export default TheatersList;
