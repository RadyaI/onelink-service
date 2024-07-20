import Fastify from 'fastify';
import userRoutes from './routes/userRoutes';

const app = Fastify({
  logger: true,
});

app.register(userRoutes, { prefix: '/user' })

app.get('/', (req, reply) => {
  reply.send({status: 'working'})
}) 

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export default async function handler(req: any, reply: any) {
  await app.ready();
  app.server.emit('request', req, reply);
}
