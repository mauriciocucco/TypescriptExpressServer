import { DataTypes, Model } from 'sequelize';
import dbConnection from '../../config/database';
import {
    UserApplicationAttributes,
    UserApplicationInput,
} from '../interfaces/user_application/user_application';

class User_Application
    extends Model<UserApplicationAttributes, UserApplicationInput>
    implements UserApplicationAttributes
{
    public id!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User_Application.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        // Other model options go here
        timestamps: true,
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'user_application', // We need to choose the model name
        paranoid: true, //this imposes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking the destroy method.
    }
);

export default User_Application;
