export default id => {
    const url = `${API_URL}/popCornCinemaApi/Users/GetUserAsync/${id}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
