import { API_URL } from '../../app/Constants';
export default (id, dateTime) => {
    const url = `${API_URL}/popCornCinemaApi/SeatsReserved/GetSeatsReservedByCriteriaAsync`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            MovieShowingId: id,
            MovieShowingDateTime: dateTime
        })
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
