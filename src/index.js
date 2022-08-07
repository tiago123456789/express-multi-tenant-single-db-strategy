require("dotenv").config()
const express = require("express")
const app = express()
const movieEndpointFactory = require("./factory/movie-endpoint-factory")
const { extractTenantBySubdomain, extractTenantByToken } = require("./middleware/extractTenant")

app.use(express.json())

app.get(
    "/movies-by-token",
    extractTenantByToken,
    movieEndpointFactory().findAll)

app.get(
    "/movies",
    extractTenantBySubdomain,
    movieEndpointFactory().findAll)

app.post("/movies",
    extractTenantBySubdomain,
    movieEndpointFactory().create)

app.listen(3000, () => {
    console.log("Server is running")
})