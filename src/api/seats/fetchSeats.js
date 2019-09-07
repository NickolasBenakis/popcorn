export default id => {
    const url = `http://localhost:5000/popCornCinemaApi/Seats/GetSeatsByAuditoriumIdAsync/${id}`;
    return fetch(url, {
        method: 'GET',
    })
        .then(data => data.json())
        .then(res => res);
};
