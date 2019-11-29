import { API_URL } from '../../app/Constants';
export default id => {
    const url = `${API_URL}/popCornCinemaApi/MovieShowings/DeleteMovieShowingAsync/${id}`;
    return fetch(url, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
