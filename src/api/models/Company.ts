import { DataTypes, Model } from 'sequelize';
import dbConnection from '../../config/database';
import {
    CompanyAttributes,
    CompanyInput,
} from '../interfaces/companies/company';
import Application from './Application';

class Company
    extends Model<CompanyAttributes, CompanyInput>
    implements CompanyAttributes
{
    public id!: number;
    public name!: string;
    public ceo!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Company.init(
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
        ceo: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        timestamps: true,
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'company', // We need to choose the model name
        paranoid: true, //this imposes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking the destroy method.
    }
);

//ASOCIACIONES
Company.hasMany(Application, {
    foreignKey: 'companyId',
});
Application.belongsTo(Company, { as: 'company' });

export default Company;
