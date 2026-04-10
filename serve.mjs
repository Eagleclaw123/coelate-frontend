import serve from 'serve';

const server = serve('dist', {
  port: 5173,
  ignore: ['node_modules']
});

export default server;

