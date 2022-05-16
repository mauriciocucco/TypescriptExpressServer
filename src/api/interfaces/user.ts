/* eslint-disable @typescript-eslint/no-empty-interface */
import { Optional } from 'sequelize/types';

export interface UserAttributes {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    hobbies: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

//defines the type of the object passed to Sequelize’s model.create
export interface UserInput extends Optional<UserAttributes, 'id'> {}

//defines the returned object from model.create, model.update, and model.findOne
export interface UserOuput extends Required<UserAttributes> {}
