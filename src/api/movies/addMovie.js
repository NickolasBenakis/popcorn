import { API_URL } from '../../app/Constants';

export default payload => {
    const url = `${API_URL}/popCornCinemaApi/Movies/AddMovieAsync`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
