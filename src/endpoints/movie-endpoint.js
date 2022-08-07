
module.exports = class MovieEndpoint {

    constructor(movieService) {
        this.movieService = movieService;
        this.findAll = this.findAll.bind(this);
        this.create = this.create.bind(this);
    }

    async findAll(request, response) {
        const registers = await this.movieService.findAllByTenantId(request.tenantId);
        return response.json(registers)
    }

   async create(request, response) {
        const data = request.body;
        await this.movieService.create({ ...data, tenant_id: request.tenantId })
        return response.sendStatus(201)
    }
}