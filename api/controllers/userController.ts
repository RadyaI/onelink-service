import { getUserByIdService, getUserService, postUserService } from "../service/userService"

function getUser(req: any, reply: any) {
    try {
        const data: Object[] = getUserService()
        reply.send({
            status: true,
            data
        })
    } catch (error) {
        console.log(error)
        reply.send(error)
    }
}

function getUserById(req: any, reply: any) {
    try {
        const data: Object | undefined = getUserByIdService(parseInt(req.params.id))
        reply.send({
            status: true,
            data
        })
    } catch (error) {
        console.log(error)
        reply.send(error)
    }
}

interface getUserData {
    id: number,
    nama: string,
    email: string
}

interface request {
    body: getUserData
}

async function postUser(req: request, reply: any): Promise<void> {
    try {
        const { id, nama, email } = req.body
        const get: getUserData = {
            id, nama, email
        }
        const data: object | undefined = await postUserService(get)
        reply.send({
            status: true,
            data
        }, 201)
    } catch (error) {
        console.log(error)
        reply.send(error, 500)
    }
}

export { getUser, getUserById, postUser }