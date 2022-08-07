module.exports = class MovieService {

    constructor(movieRepository) {
        this.movieRepository = movieRepository
    }

    findAllByTenantId(tenantId) {
        return this.movieRepository.findAllByTenantId(tenantId);
    }

    create(data) {
        return this.movieRepository.create(data)
    }
}