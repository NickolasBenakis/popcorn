export default payload => {
    const url =
        'http://localhost:5000/popCornCinemaApi/Reservations/GetReservationWithUserCriteriaAsync';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(data => handleErrors(data))
        .then(res => res)
        .catch(error => console.log(error));
};
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
