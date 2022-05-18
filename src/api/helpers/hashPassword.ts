import * as bcrypt from 'bcrypt';

export const hash = (password: string): string => {
    //Sync por el set del password en el modelo de User
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
};
