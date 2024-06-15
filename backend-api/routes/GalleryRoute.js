import express from "express";
import {
    getGalleries,
    getGalleryById,
    saveGallery,
    updateGallery,
    deleteGallery
} from "../controllers/GalleryController.js";
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/galleries', getGalleries);
router.get('/galleries/:id', getGalleryById);
router.post('/galleries', authenticate, saveGallery);
router.patch('/galleries/:id', authenticate, updateGallery);
router.delete('/galleries/:id', authenticate, deleteGallery);

export default router;