export default (username, password) => {
    const url = `${API_URL}/popCornCinemaApi/Session/LogIn`;
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
