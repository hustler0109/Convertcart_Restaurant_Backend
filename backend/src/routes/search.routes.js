import express from 'express';
import { searchDish } from '../controllers/search.controller.js';
const router = express.Router();
router.get('/dishes', searchDish);
export default router;
