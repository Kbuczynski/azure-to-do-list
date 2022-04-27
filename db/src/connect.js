const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = async function () {
    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    return { 
        client,
        container
    }
}
