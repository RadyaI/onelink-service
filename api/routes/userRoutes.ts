export default async function (fastify: any, opts: any) {
    fastify.get('/', (req: any, reply: any) => {
        reply.send('hai')
    })
}