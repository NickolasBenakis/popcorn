import { API_URL } from '../../app/Constants';

export default reservationId => {
    const url = `${API_URL}/popCornCinemaApi/ReservationCqrs/GetReservationHistoryById/${reservationId}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
