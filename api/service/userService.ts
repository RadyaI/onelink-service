import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { db, auth } from '../firebase/firebase'

interface LoginData {
    email: string,
    password: string
}

async function registerUser(data: LoginData): Promise<Object | any> {
    try {
        const register = await createUserWithEmailAndPassword(auth, data.email, data.password)
        return register
    } catch (error: any) {
        return {
            code: error.code,
            msg: error.message
        }
    }
}

async function loginUser(data: LoginData): Promise<Object | any> {
    try {
        const login = await signInWithEmailAndPassword(auth, data.email, data.password)
        return login
    } catch (error: any) {
        return {
            code: error.code,
            msg: error.message
        }
    }
}

async function logoutUser(): Promise<Object | any> {
    try {
        await signOut(auth)
        return { msg: "Logout successfully" }
    } catch (error: any) {
        return {
            code: error.code,
            msg: error.message
        }
    }
}

async function getUserService(): Promise<Object | undefined> {
    try {

        interface user {
            id: string,
            nama: string,
            email: string
        }

        const data: user[] = []

        const get = await getDocs(collection(db, 'user'))
        get.forEach((userData: any) => {
            const user: user = userData.data()
            data.push({ ...user, id: userData.id })
        })

        const response: Object = {
            status: true,
            data
        }

        return response
    } catch (error: any) {
        return error
    }
}

async function getUserByIdService(id: string): Promise<Object | undefined> {
    try {
        const get = await getDoc(doc(db, 'user', id))
        let response: Object | undefined
        if (get.data() == undefined) {
            response = undefined
        } else {
            response = {
                status: true,
                id: get.id,
                data: get.data()
            }
        }
        return response
    } catch (error: any) {
        return error
    }
}

async function postUserService(data: Object): Promise<Object | undefined> {
    try {
        const post: any = await addDoc(collection(db, 'user'), data)
        const response: Object | undefined = {
            status: true,
            newData: data,
            result: post
        }

        return response
    } catch (error: any) {
        console.log(error)
        return error
    }
}

export { getUserService, getUserByIdService, postUserService, registerUser, loginUser, logoutUser }