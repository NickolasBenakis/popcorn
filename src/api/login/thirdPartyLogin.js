import { API_URL } from '../../app/Constants';

export default accessToken => {
    const url = `${API_URL}/popCornCinemaApi/Session/ThirdPartyLogIn`;
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
