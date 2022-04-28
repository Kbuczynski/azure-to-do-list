const db = require("../db");

module.exports = async function (context, req) {
    const { client, container } = await db.connect()
    await db.create(client)

    const response = {
        status: 200,
        body: null
    }

    try {
        const { id, category, name, description, isComplete } = req.body
        const newItem = { id: id.toString(), category, name, description, isComplete }

        const { resource: createdItem } = await container.items.create(newItem);
        response.body = createdItem
    } catch (e) {
        response.status = 400
        response.body = e.message
        context.log(e)
    }    

    context.res = {
        ...response
    };
}
