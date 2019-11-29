import { API_URL } from '../../app/Constants';
export default () => {
    const url = `${API_URL}/popCornCinemaApi/Reservations/GetReservationsAsync`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
