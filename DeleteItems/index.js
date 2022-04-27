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
        const { resource: result } = await container.item(id.toString(), category).delete();
        response.body = result
    } catch (e) {
        response.status = e?.code || 400
        context.log(e)
    }    

    context.res = {
        ...response
    };
}
