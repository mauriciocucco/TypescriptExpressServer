/* eslint-disable @typescript-eslint/no-empty-interface */
import { Optional } from 'sequelize/types';

export interface UserApplicationAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

/* Defines the type of the object passed to Sequelize’s model.create to
  tell Sequelize and TypeScript that the property id or active,
  in this case, are optional to be passed at creation time */
export interface UserApplicationInput
    extends Optional<UserApplicationAttributes, 'id'> {}

//defines the returned object from model.create, model.update, and model.findOne
export interface UserApplicationOutput
    extends Required<UserApplicationAttributes> {}
