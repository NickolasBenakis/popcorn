import { API_URL } from '../../app/Constants';
export default () => {
    const url = `${API_URL}/popCornCinemaApi/MovieShowings/GetMovieShowingsAsync`;
    return fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
