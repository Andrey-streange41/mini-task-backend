import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import knex from '../config/database';
import {Comments}from './Commens';

Model.knex(knex);

export class Authors extends Model{

    static get tableName (): string{
        return 'authors';
    }


    static relationMappings : RelationMappings | RelationMappingsThunk =() =>({
        comments:{
            relation:Model.HasManyRelation,
            modelClass:Comments,

            join:{
                from:'authors.id',
                to:'comments.ownerId'
            }

        }
    })
}