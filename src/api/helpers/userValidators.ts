import CustomError from '../errors/custom-error';
import User from '../models/User';

export const verifyUniqueEmail = async (email = ''): Promise<void> => {
    const user = await User.findOne({
        where: { email },
    });

    //Si que existe un usuario con ese email
    if (user) {
        const error = new CustomError('The email already exists.');
        error.status = 400;
        throw error;
    }
};
