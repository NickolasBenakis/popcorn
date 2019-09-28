export default () => {
    const url =
        'http://localhost:5000/popCornCinemaApi/Auditoriums/GetAuditoriumsAsync';
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
