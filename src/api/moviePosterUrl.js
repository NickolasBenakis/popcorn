export default posterPath => {
    if (posterPath !== null && posterPath !== undefined) {
        let poster_path = posterPath.slice(1, posterPath.length);
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`;
    }
};
