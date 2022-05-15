import User from '../models/User';

export const verifyUniqueEmail = async (email = ''): Promise<void | Error> => {
    const user = await User.findOne({
        where: { email },
    });

    //Si que existe un usuario con ese email
    if (user) {
        const error = new Error('The email already exists.');

        // error.status = 400;

        throw error;
    }
};
