export default () => {
    const url = 'http://localhost:5000/popCornCinemaApi/Users/GetUsersAsync';
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
