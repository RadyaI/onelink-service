import { getUser, getUserById, postUser } from "../controllers/userController";

export default async function (fastify: any, opts: any) {
    // Prefix /user/
    fastify.get('/', getUser)
    fastify.get('/:id', getUserById)
    fastify.post('/', postUser)
}   