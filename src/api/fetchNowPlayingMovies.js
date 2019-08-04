import { moviesKey } from '../envs/api_key';

export default pageNumber => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${moviesKey}&page=${pageNumber}`;
    return fetch(url)
        .then(res => res.json())
        .catch(err => {
            throw Error(err);
        });
};
