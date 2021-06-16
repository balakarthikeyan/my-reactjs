const Hapi = require("hapi");
const Inert = require('inert');

const server = Hapi.server({
    port: 3000,
    host: "localhost",
});

const consoleLogging = {
    plugin: require('good'),
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        consoleReporter: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ response: '*', log: '*' }]
          },
          { module: 'good-console' },
          'stdout'
        ]
      }
    }
  };

const bootUpServer  = async () => {
    await server.register([Inert]);
    await server.register([consoleLogging]);
    await server.start();
    console.log(`Server is running at ${server.info.uri}`);
    process.on('unhandledRejection', (err) => {       
      console.log(err); 
      process.exit(1);    
    })    
};

server.route({
    path: "/",
    method: "GET",
    handler: (request, h) => {
        return "Hello, hapi!";
    },
});

server.route({
    path: "/{id}",
    method: "GET",
    handler: (request, h) => {
        return `ID: ${encodeURIComponent(request.params.id)}`;
    },
});

server.route({    
    method: 'GET',    
    path: '/todo',    
    handler: (req, h) => {        
       return h.file('./todo.html')    
    }
})

bootUpServer ();
