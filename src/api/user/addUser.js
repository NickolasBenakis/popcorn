export default payload => {
    const url = 'http://localhost:5000/popCornCinemaApi/Users/AddUserAsync';
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
