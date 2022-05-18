/* eslint-disable @typescript-eslint/no-empty-interface */
import { Optional } from 'sequelize/types';

export interface CompanyAttributes {
    id: number;
    name: string;
    ceo: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

/* Defines the type of the object passed to Sequelize’s model.create to
  tell Sequelize and TypeScript that the property id or active,
  in this case, are optional to be passed at creation time */
export interface CompanyInput
    extends Optional<CompanyAttributes, 'id' | 'ceo'> {}

//defines the returned object from model.create, model.update, and model.findOne
export interface CompanyOutput extends Required<CompanyAttributes> {}
