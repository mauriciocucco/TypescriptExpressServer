import { QueryInterface } from 'sequelize/types';

export default {
    async up(queryInterface: QueryInterface, Sequelize: any) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('Users', [
            {
                testing_row: 'Testing 1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                testing_row: 'Testing 2',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                testing_row: 'Testing 3',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                testing_row: 'Testing 4',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface: QueryInterface, Sequelize: any) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('testing', null as any, {});
    },
};
