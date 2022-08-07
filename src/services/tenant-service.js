const { getDefaultInstance } = require("../config/database")

class TenantService {

    constructor() {
        this.mapTenantsById = {}
    };

    isExist(tenant) {
        return this.mapTenantsById[tenant] != null
    }

    async add(tenant) {
        const register = await getDefaultInstance()("tenants")
            .select(["id"])
            .where("name", "=", tenant)

        this.mapTenantsById[tenant] = register[0].id
    }

    getIdBySubdomain(subdomain) {
        return this.mapTenantsById[subdomain] || null;
    }
}

const tenantService = new TenantService();
module.exports = tenantService;