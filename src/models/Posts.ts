import { Model,RelationMappings,RelationMappingsThunk } from "objection";
import knex from '../config/database';
import {Comments} from './Commens';


Model.knex(knex);

export class Posts extends Model{

    static get tableName (): string{
        return 'posts';
    }
    static relationMappings:RelationMappings|RelationMappingsThunk = () => ({
    
        comments:{
        relation: Model.HasManyRelation,
        modelClass:Comments,

        join:{
            from:'posts.id',
            to:'comments.postId'
        }

    }
   } )
}