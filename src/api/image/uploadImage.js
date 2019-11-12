export default (cloudName, file) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    return fetch(url, {
        method: 'POST',
        body: file
    })
        .then(data => handleErrors(data))
        .then(res => res)
        .catch(error => console.log(error));
};
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
