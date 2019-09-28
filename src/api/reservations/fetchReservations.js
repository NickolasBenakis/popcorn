export default () => {
    const url =
        'localhost:5000/popCornCinemaApi/Reservations/GetReservationsAsync';
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
