import { Router } from 'express';
import {
    createImage,
    getImages,
    deleteImage,
} from '../controllers/galleryController';

const router = Router();

router.route('/')
    .post(createImage)
    .get(getImages);

router.route('/:id')
    .delete(deleteImage);

export default router;
