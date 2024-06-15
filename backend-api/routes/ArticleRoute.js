import express from "express";
import {
    getArticles,
    getArticleById,
    saveArticle,
    updateArticle,
    deleteArticle
} from "../controllers/ArticleController.js";
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles', authenticate, saveArticle);
router.patch('/articles/:id', authenticate, updateArticle);
router.delete('/articles/:id', authenticate, deleteArticle);

export default router;
