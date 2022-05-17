/* eslint-disable @typescript-eslint/no-empty-interface */
import { Optional } from 'sequelize/types';

export interface UserAttributes {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    password: string;
    email: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

/* Defines the type of the object passed to Sequelize’s model.create to
  tell Sequelize and TypeScript that the property id or active,
  in this case, are optional to be passed at creation time */
export interface UserInput extends Optional<UserAttributes, 'id' | 'active'> {}

//defines the returned object from model.create, model.update, and model.findOne
export interface UserOutput extends Required<UserAttributes> {}
