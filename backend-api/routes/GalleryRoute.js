import express from "express";
import {
    getGalleries,
    getGalleryById,
    saveGallery,
    updateGallery,
    deleteGallery
} from "../controllers/GalleryController.js";

const router = express.Router();

router.get('/galleries', getGalleries);
router.get('/galleries/:id', getGalleryById);
router.post('/galleries', saveGallery);
router.patch('/galleries/:id', updateGallery);
router.delete('/galleries/:id', deleteGallery);

export default router;