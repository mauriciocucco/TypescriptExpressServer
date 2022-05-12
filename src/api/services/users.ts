import { verifyUniqueEmail } from '../helpers/userValidators'
import User from '../models/User'

export const getUsers = async () => {
    const users = await User.findAll()
    return users
}

export const getUserById = async (id: string) => {
    const user = await User.findByPk(id)

    if (!user) {
        const error = new Error('User not found')
        error.status = 404
        throw error
    }

    return user
}

export const storeUser = async (body: any) => {
    try {
        await verifyUniqueEmail(body.email)

        const user = User.build(body)

        await user.save()

        return user
    } catch (error) {
        console.log('STORE USER: ', error)
        throw error
    }
}

export const updateUser = async (id: string, body: any) => {
    try {
        const user = await getUserById(id)

        await verifyUniqueEmail(body.email)

        await user.update(body)

        await user.save()

        return user
    } catch (error) {
        console.log('UPDATE USER: ', error)
        throw error
    }
}

export const deleteUser = async (id: string) => {
    try {
        const user = await getUserById(id)

        await user.update({ status: false })

        await user.save()

        return user
    } catch (error) {
        console.log('DELETE USER: ', error)
        throw error
    }
}
