import { getUser } from "../controllers/userController";

export default async function (fastify: any, opts: any) {
    fastify.get('/', getUser)
}   