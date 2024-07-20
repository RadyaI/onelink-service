import { getUserByIdService, getUserService, postUserService } from "../service/userService"

async function getUser(req: any, reply: any): Promise<void> {
    try {

        const data: any = await getUserService()
        reply.code(200).send(data)

    } catch (error) {
        console.log(error)
        reply.send(error)
    }
}

async function getUserById(req: any, reply: any): Promise<void> {
    try {

        const data: Object | undefined = await getUserByIdService(req.params.id)
        if (!data) {
            reply.code(404).send({ status: false, msg: 'User Not Found' })
        } else {
            reply.code(200).send(data)
        }

    } catch (error) {
        console.log(error)
        reply.send(error)
    }
}

interface getUserData {
    nama: string,
    email: string
}

interface request {
    body: getUserData
}

async function postUser(req: request, reply: any): Promise<void> {
    try {
        const { nama, email } = req.body
        const get: getUserData = {
            nama, email
        }
        const data: object | undefined = await postUserService(get)
        reply.code(201).send(data)
    } catch (error) {
        console.log(error)
        reply.send(error, 500)
    }
}

export { getUser, getUserById, postUser }