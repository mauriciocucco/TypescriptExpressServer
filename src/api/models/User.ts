import { DataTypes, Model } from 'sequelize';
import dbConnection from '../../config/database';
import { UserAttributes, UserInput } from '../interfaces/user';

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public first_name!: string;
    public last_name!: string;
    public phone_number!: string;
    public password!: string;
    public email!: string;
    public active!: boolean;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        // Other model options go here
        timestamps: true,
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'user', // We need to choose the model name
        paranoid: true, //this imposes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking the destroy method.
    }
);

export default User;
