import express from 'express';
import { getNews, createNews, updateNews, deleteNews } from '../controllers/newsController';
import { requireAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getNews);
router.post('/', requireAdmin, createNews);
router.put('/:id', requireAdmin, updateNews);
router.delete('/:id', requireAdmin, deleteNews);

export default router;
