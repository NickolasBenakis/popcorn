export default id => {
    const url = `http://localhost:5000/popCornCinemaApi/ReservationCqrs/GetReservationMock/${id}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
