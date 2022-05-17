import { verifyUniqueEmail } from '../helpers/userValidators';
import { UserInput, UserOutput } from '../interfaces/users/user';
import User from '../models/User';
import NotFound from '../errors/not-found';
import { PaginatedParams } from '../interfaces/paginated-params';
import { PaginatedUsers } from '../interfaces/users/paginated-users';

export const getUsers = async (): Promise<UserOutput[]> => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });

    return users;
};

export const getUsersPaginated = async (
    queryParams: PaginatedParams
): Promise<PaginatedUsers> => {
    const {
        size = 10,
        page: currentPage = 1,
        orderBy = 'id',
        orderType = 'DESC',
    } = queryParams;

    const offset = (currentPage - 1) * size;

    const { count: totalItems, rows: data } = await User.findAndCountAll({
        limit: size,
        offset,
        where: { active: true },
        order: [[orderBy, orderType]],
    });

    const pages = Math.ceil(totalItems / size);

    return { totalItems, data, currentPage, pages };
};

export const getUserById = async (id: string) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
    });

    if (!user) {
        throw new NotFound('User not found.');
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

        if (!user) {
            throw new NotFound('User not found.');
        }

        await verifyUniqueEmail(body.email);

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
