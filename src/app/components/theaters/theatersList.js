import React from 'react';
import TheaterCard from './theaterCard.jsx';

function TheatersList({
    auditoriums,
    movieShow,
    toggleSeats,
    handleTime,
    handleShowing
}) {
    return (
        <div className="theatersList">
            {auditoriums.map((auditorium, index) => {
                return (
                    <TheaterCard
                        key={auditorium.auditoriumId}
                        id={auditorium.auditoriumId}
                        name={auditorium.name}
                        description={auditorium.description}
                        totalSeats={auditorium.totalSeats}
                        seats={auditorium.seats}
                        movieShowing={auditorium.movieShowing}
                        movieShowingID={
                            movieShow && movieShow[index].movieShowingId
                        }
                        movieShowDateRange={[
                            movieShow && movieShow[index].showingDateFrom,
                            movieShow && movieShow[index].showingDateTo
                        ]}
                        movieScreeningTime={
                            movieShow && movieShow[index].screeningDateTime
                        }
                        toggleSeats={toggleSeats}
                        handleTime={handleTime}
                        handleShowing={handleShowing}
                        auditorium={auditorium}
                        movieShow={movieShow && movieShow[index]}
                    />
                );
            })}
        </div>
    );
}

export default TheatersList;
