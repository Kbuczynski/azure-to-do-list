const config = require("../config");

module.exports = async function (client) {
  const { databaseId, containerId, partitionKey } = config;

  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  });

  console.log(`Created database:\n${database.id}\n`);

  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists({
      id: containerId,
      partitionKey
    },
    { offerThroughput: 400 }
    );

  console.log(`Created container:\n${container.id}\n`);
}
