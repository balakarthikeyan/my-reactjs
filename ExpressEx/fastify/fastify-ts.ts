import Fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify();

server.get('/ping', async (request, reply) => {
    return { pong: 'it worked!' };
});

server.listen(3000, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Fastify with TypeScript example running');
});