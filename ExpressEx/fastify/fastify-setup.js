const fastify = require('fastify')();

// Error Handling
/*
fastify.setErrorHandler((error, request, reply) => {
    console.error(error.message);
    reply.status(500).send({ error: 'Internal Server Error' });
});

fastify.get('/', async (request, reply) => {
    throw new Error('Oops! Something went wrong in Fastify.');
});
*/

fastify.get('/', async (request, reply) => {
    return { message: 'Hello from Fastify!' };
});

fastify.listen(3002, (err) => {
    if (err) {
        // throw err;
        console.error(err);
        process.exit(1);
    }
    console.log('Fastify server running on http://localhost:3002');
});