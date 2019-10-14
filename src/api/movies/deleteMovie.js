export default movieID => {
    const url = `http://localhost:5000/popCornCinemaApi/Movies/DeleteMovieAsync/${movieID}`;
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
