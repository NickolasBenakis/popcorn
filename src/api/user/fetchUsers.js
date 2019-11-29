import { API_URL } from '../../app/Constants';
export default () => {
    const url = `${API_URL}/popCornCinemaApi/Users/GetUsersAsync`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
