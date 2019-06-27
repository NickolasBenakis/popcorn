import NowPlayingMovies from '../../api/fetchNowPlayingMovies'

export default async () => {
    try {
        const res = await NowPlayingMovies(1)
        const movies = res.results
        console.log(movies)
    } catch (error) {
        throw Error(error)
    }
}
