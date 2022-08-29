import {Router} from 'express';
import commentsController from '../controllers/comments.controller';

export const router = Router();




router.get('/commentsToPost/:id', commentsController.getCommentsByPostId);
router.get('/comments/:id',commentsController.getCommentsByAuthorId);
router.put('/comments',commentsController.reply);
router.delete('/comments',commentsController.deleteById);
router.post('/comments',commentsController.createOne);




router.delete('/post/:id', commentsController.deletePost); 