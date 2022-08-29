import { Response, Request } from "express";
import { Comments } from "../models/Commens";
import { Authors } from "../models/Author";
import { Posts } from "../models/Posts";

class CommentsController {
  async getCommentsByPostId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {page,limit} = req.query;
      const comments = await Comments.query()
        .select("message")
        .where("postId", "=", id)
        .page(Number(page),Number(limit));
      res.status(200).json(comments);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json(error);
    }
  }
  async getCommentsByAuthorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {page,limit} = req.query;
      const comments = await Comments.query()
        .select("message")
        .where("ownerId", "=", id)
        .page(Number(page),Number(limit));
      res.status(200).json(comments);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json(error);
    }
  }
  async reply(req: Request, res: Response) {
    try {
      const { updatedMessage, ownerId, postId } = req.body;
      console.log(req.body);

      const results = await Comments.query()
        .where("ownerId", "=", ownerId)
        .andWhere("postId", "=", postId)
        .update({ message: updatedMessage });
      res.status(200).json(results);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json(error);
    }
  }
  async createOne(req: Request, res: Response) {
    try {
      const results = await Comments.transaction(async (trx) => {
        const insertedGraph = await Comments.query(trx)
          .allowGraph("[posts.[comments], author.[comments]]")
          .insertGraph(req.body);
        res.status(200).json(insertedGraph);
      });
      req.body = results;
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json(error);
    }
  }
  async deleteById(req: Request, res: Response) {
    try {
      const { ownerId, postId } = req.body;
      const results = await Comments.query()
        .delete()
        .where("ownerId", "=", ownerId)
        .andWhere("postId", "=", postId);
      res.status(200).json(results);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json(error);
    }
  }
  async deletePost(req: Request, res: Response){
    try {
      const {id} = req.params;
      const results = await Posts.query().deleteById(id);
      res.status(200).json(results);
    } catch (error) {
        res.status(500).json(error);
    }
  }
}

export default new CommentsController();
