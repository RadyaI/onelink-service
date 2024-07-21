import { loginUser, logoutUser, registerUser } from "../service/userService"

interface LoginData {
    email: string,
    password: string
}

interface request {
    body: LoginData
}

async function register(req: request, reply: any): Promise<void> {
    try {
        const userdata: LoginData = {
            email: req.body.email,
            password: req.body.password
        }
        const data = await registerUser(userdata)
        reply.send(data)
    } catch (error) {
        reply.send(error)
    }
}

async function login(req: request, reply: any): Promise<void> {
    try {
        const userdata: LoginData = {
            email: req.body.email,
            password: req.body.password
        }
        const data = await loginUser(userdata)
        reply.send(data)

    } catch (error: any) {
        reply.send({ code: error.code, msg: error.message })
    }
}

async function logout(req: any, reply: any): Promise<void> {
    try {
        const data = await logoutUser()
        reply.send(data)
    } catch (error) {
        reply.send(error)
    }
}

export { register, login, logout }