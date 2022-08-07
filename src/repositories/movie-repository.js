module.exports = class MovieRepository {

    constructor(connection) {
        this.connection = connection
    }

    findAllByTenantId(tenantId) {
        return this.connection("movies")
            .where("tenant_id", "=", tenantId)
            .returning("*")
    }

    create(data) {
        return this.connection("movies").insert(data)
    }
}