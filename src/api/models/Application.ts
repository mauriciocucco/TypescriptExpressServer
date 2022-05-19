import { DataTypes, Model } from 'sequelize';
import dbConnection from '../../config/database';
import {
    ApplicationAttributes,
    ApplicationInput,
} from '../interfaces/applications/applications';
import Company from './Company';
import User from './User';
import User_Application from './User_Application';

class Application
    extends Model<ApplicationAttributes, ApplicationInput>
    implements ApplicationAttributes
{
    public id!: number;
    public name!: string;
    public founder!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Application.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        founder: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        timestamps: true,
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'application', // We need to choose the model name
        paranoid: true, //this imposes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking the destroy method.
    }
);

//ASOCIACIONES
Application.belongsToMany(User, { through: User_Application });
User.belongsToMany(Application, {
    through: User_Application,
});

export default Application;
