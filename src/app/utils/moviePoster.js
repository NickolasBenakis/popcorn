export const moviePoster = posterPath => {
    if (posterPath !== null && posterPath !== undefined) {
        let poster_path = posterPath.slice(1, posterPath.length);
        return `https://image.tmdb.org/t/p/w400/${poster_path}`;
    }
    return '';
};
