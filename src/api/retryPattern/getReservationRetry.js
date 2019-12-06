import { API_URL } from '../../app/Constants';

export default id => {
    const url = `${API_URL}/popCornCinemaApi/ReservationCqrs/GetReservationMock/${id}`;
    return fetch(url, {
        method: 'GET'
    }).then(data => data);
};
