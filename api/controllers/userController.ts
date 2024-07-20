function getUser(req: any, reply: any) {
    reply.send({
        status: 'Route user working'
    })
}

export { getUser }