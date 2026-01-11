import { Router } from 'express';
import {
    createAnnouncement,
    getAnnouncements,
    deleteAnnouncement,
} from '../controllers/announcementController';

const router = Router();

router.route('/')
    .post(createAnnouncement)
    .get(getAnnouncements);

router.route('/:id')
    .delete(deleteAnnouncement);

export default router;
