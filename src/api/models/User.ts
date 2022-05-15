import { DataTypes } from 'sequelize';
import db from '../../config/database';

const User = db.define('User', {
    given_name: {
        type: DataTypes.STRING,
    },
    family_name: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
});

export default User;
