export default reservationId => {
    const url = `http://localhost:5000/popCornCinemaApi/ReservationCqrs/GetReservationHistoryById/${reservationId}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
