import { verifyUniqueEmail } from '../helpers/userValidators';
import { UserInput, UserOutput } from '../interfaces/user';
import User from '../models/User';
import CustomError from '../errors/custom-error';

export const getUsers = async (): Promise<UserOutput[]> => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });

    return users;
};

export const getUserById = async (id: string) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
    });

    if (!user) {
        const error = new CustomError('User not found.');
        error.status = 400;
        throw error;
    }

    return user;
};

export const storeUser = async (body: UserInput): Promise<UserOutput> => {
    try {
        await verifyUniqueEmail(body.email);

        const user = await User.create(body);

        return user;
    } catch (error) {
        console.log('STORE USER: ', error);
        throw error;
    }
};

export const updateUser = async (
    id: string,
    body: Partial<UserInput>
): Promise<UserOutput> => {
    try {
        const user = await User.findByPk(id);

        await verifyUniqueEmail(body.email);

        if (!user) {
            const error = new CustomError('User not found.');
            error.status = 400;
            throw error;
        }

        const updatedUser = await user.update(body);

        await user.save();

        return updatedUser;
    } catch (error) {
        console.log('UPDATE USER: ', error);
        throw error;
    }
};

export const deleteUser = async (id: string): Promise<number> => {
    try {
        const deletedUser = await User.destroy({
            where: { id },
        });

        return deletedUser;
    } catch (error) {
        console.log('DELETE USER: ', error);
        throw error;
    }
};
