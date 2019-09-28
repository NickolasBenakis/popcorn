export default () => {
    const url =
        'http://localhost:5000/popCornCinemaApi/MovieShowings/GetMovieShowingsAsync';
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res)
        .catch(error => console.log(error));
};
