import BadRequest from '../errors/not-found';
import User from '../models/User';

export const verifyUniqueEmail = async (email = ''): Promise<void> => {
    const user = await User.findOne({
        where: { email },
    });

    //Si que existe un usuario con ese email
    if (user) {
        throw new BadRequest('The email already exists.');
    }
};
