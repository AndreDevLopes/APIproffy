import express from 'express';
import ClassesController from './controllers/ClassesController';
const classesController = new ClassesController();


const router = express.Router();

router.post("/classes",classesController.create );
router.get("/classes",classesController.index);
export default router;