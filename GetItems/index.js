const db = require("../db");

module.exports = async function (context, req) {
    const category = req.query.category || ''

    const { client, container } = await db.connect()
    await db.create(client)
    
    const query = {
        all: 'SELECT * from Items',
        category: `SELECT * from Items WHERE Items.category = "${category}"`
    };

    const response = {
        status: 200,
        body: null
    }

    try {
        const { resources: items } = await container.items
            .query(category ? query.category : query.all)
            .fetchAll();
        
        response.body = items
    } catch (e) {
        response.status = e.code
        context.log(e)
    }    

    context.res = {
        ...response
    };
}
