const apiKey = '47cb32d7a40a71c6ac4940b6e81611d0'
const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestUpcomming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestSearching:`https://api.themoviedb.org/3/search/company?api_key=${apiKey}&page=1`,
}

export default requests