export default accessToken => {
    const url = `http://localhost:5000/popCornCinemaApi/Session/ThirdPartyLogIn`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            AccessToken: accessToken,
            TokenSource: 'google'
        })
    })
        .then(data => data.json())
        .then(res => res);
};
