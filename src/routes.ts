import { Router } from 'express';
import { createPostController } from './useCases/CreatePost';
import { getPostsController } from './useCases/GetPosts';
import { deletePostController } from './useCases/DeletePost';
import { updatePostController } from './useCases/UpdatePost';

const router = Router();

router.get('/posts', (req, res) => getPostsController.handle(req, res));
router.post('/post', (req, res) => createPostController.handle(req, res));
router.post('/update', (req, res) => updatePostController.handle(req, res));
router.delete('/delete', (req, res) => deletePostController.handle(req, res));

export default router;
