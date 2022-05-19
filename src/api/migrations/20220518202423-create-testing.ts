import { QueryInterface } from 'sequelize';

export default {
    async up(queryInterface: QueryInterface, Sequelize: any) {
        await queryInterface.createTable('testing', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            testing_column: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface: QueryInterface, Sequelize: any) {
        await queryInterface.dropTable('testing');
    },
};
