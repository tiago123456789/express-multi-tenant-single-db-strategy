const { getDefaultInstance } = require("../config/database");
const MovieRepository = require("../repositories/movie-repository");
const MovieService = require("../services/movie-service")

module.exports = (params) => {
    const connection = getDefaultInstance()
    const movieRepository = new MovieRepository(connection)
    const movieService = new MovieService(movieRepository);
    return movieService;
}