import Hapi from 'hapi';
import * as mock from './shifts-mock-api/index.js';

const server = new Hapi.Server({
  host: '127.0.0.1',
  port: '8080',
  routes: {
    cors: { origin: 'ignore' },
  },
});

async function main() {
  await server.register([{
    plugin: mock,
    routes: { prefix: '/shifts' },
  }]);

  await server.start();

  console.info(`✅  API server is listening at ${server.info.uri.toLowerCase()}`);
}

main();
