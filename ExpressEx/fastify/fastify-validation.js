const fastify = require('fastify')();

fastify.get('/data', {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    active: { type: 'boolean' },
                },
            },
        },
    },
    handler: async (request, reply) => {
        return { id: 1, name: 'John Doe', active: true };
    },
});

fastify.post('/user', {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'age'],
            properties: {
                name: { type: 'string' },
                age: { type: 'integer', minimum: 0 },
            },
        },
    },
    handler: async (request, reply) => {
        const { name, age } = request.body;
        return { message: `User ${name} is ${age} years old.` };
    },
});

fastify.listen(3002, (err) => {
    if (err) throw err;
    console.log('Fastify validation example running');
});