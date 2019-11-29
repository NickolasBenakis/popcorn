import { API_URL } from '../../app/Constants';
export default () => {
    const url = `${API_URL}/popCornCinemaApi/Auditoriums/GetAuditoriumsAsync`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
