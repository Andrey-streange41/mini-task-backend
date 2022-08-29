import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import knex from '../config/database';
import {Posts} from '../models/Posts';
import {Authors} from '../models/Author';

Model.knex(knex);


export class Comments extends Model {
    static get tableName():string{
        return 'comments';
    }

    static relationMappings:RelationMappings|RelationMappingsThunk = () => ({
       post: {
          relation: Model.BelongsToOneRelation,
          // The related model.
          modelClass: Posts,
    
          join: {
            from: 'comments.postId',
            to: 'posts.id',
          },
        },
        owner:{
            relation:Model.BelongsToOneRelation,
           
            modelClass:Authors,

            join:{
                from:'comments.ownerId',
                to:'authors.id'
            }
        }
      })
    
}

export default Comments;