const fastify = require('fastify')();

fastify.register(async (instance) => {
    instance.addHook('preHandler', async (request, reply) => {
        console.log(`${request.method} ${request.url}`);
    });
});

fastify.get('/', async (request, reply) => {
    return { message: 'Plugins in Fastify!' };
});

fastify.listen(3002, (err) => {
    if (err) throw err;
    console.log('Fastify plugin example running');
});