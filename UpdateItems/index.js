const db = require("../db");

module.exports = async function (context, req) {
    const { client, container } = await db.connect()
    await db.create(client)

    const response = {
        status: 200,
        body: null
    }

    try {       
        const { id, category } = req.body
        const createdItem = {
            id: id.toString(),
            ...req.body
        }

        const { resource: updatedItem } = await container
            .item(id, category)
            .replace(createdItem);
        response.body = updatedItem
    } catch (e) {
        response.status = 400
        response.body = e.message
        context.log(e)
    }    

    context.res = {
        ...response
    };
}
