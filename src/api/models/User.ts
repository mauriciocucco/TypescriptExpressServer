import { DataTypes, Model } from 'sequelize';
import dbConnection from '../../config/database';

class User extends Model {}

User.init(
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
    }
);
