import React from 'react';
import TheaterCard from './theaterCard.jsx';

function TheatersList({ auditoriums, movieShow }) {
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
                        movieShowingID={movieShow && movieShow.movieShowingId}
                        movieShowDateRange={[
                            movieShow && movieShow.showingDateFrom,
                            movieShow && movieShow.showingDateTo,
                        ]}
                    />
                );
            })}
        </div>
    );
}

export default TheatersList;
