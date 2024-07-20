interface UserData {
    id: number,
    nama: string,
    email: string,
}

const userData: UserData[] = [
    {
        id: 1,
        nama: 'Muhammad Radya Iftikhar',
        email: 'radyaiftikhar@gmail.com'
    },
    {
        id: 2,
        nama: 'Muhammad Fulan',
        email: 'fulan@gmail.com'
    }
]

function getUserService(): Object[] {
    return userData
}

function getUserByIdService(id: number): Object | undefined {
    const findData: UserData | undefined = userData.find(i => i.id === id)
    return findData
}

async function postUserService(data: Object): Promise<Object | undefined> {
    return data
}

export { getUserService, getUserByIdService, postUserService }