export default id => {
    const url = `${API_URL}/popCornCinemaApi/Seats/GetSeatsByAuditoriumIdAsync/${id}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
