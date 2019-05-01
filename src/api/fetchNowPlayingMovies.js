export default (pageNumber) => {

    const api_key = `bc50218d91157b1ba4f142ef7baaa6a0`;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=${pageNumber}`;
    return fetch(url)
        .then(res => res.json())
        .catch(err => { throw Error(err) });
}