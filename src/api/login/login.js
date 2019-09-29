export default (username, password) => {
    const url = 'http://localhost:5000/popCornCinemaApi/Session/LogIn';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Username: username,
            Password: password
        })
    })
        .then(data => data.json())
        .then(res => res);
};
