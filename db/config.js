require('dotenv').config();

module.exports = Object.freeze({
    endpoint: process.env.DB_ENDPOINT,
    key: process.env.DB_KEY,
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: {
        kind: "Hash",
        paths: ["/category"]
    }
});
