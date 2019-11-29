export default () => {
    const url = `${API_URL}/popCornCinemaApi/Movies/GetMoviesAsync`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
