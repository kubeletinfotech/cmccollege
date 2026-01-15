import express from 'express';
import { getAdmissionSettings, updateAdmissionSettings } from '../controllers/admissionController';
import { requireAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/settings', getAdmissionSettings);
// requireAdmin is an array of middleware, so we spread it
router.put('/settings', ...requireAdmin, updateAdmissionSettings);

export default router;
