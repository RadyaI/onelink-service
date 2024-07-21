import { register, logout, login } from "../controllers/authController";

export default async function (fastify: any, opts: any) {
    fastify.post('/register', register)
    fastify.post('/login', login)
    fastify.post('/logout', logout)
}