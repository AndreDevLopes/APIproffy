import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControlles from './controllers/ConnectionsControlles';
const classesController = new ClassesController();
const connectionsController = new ConnectionsControlles();

const router = express.Router();

router.post("/classes",classesController.create );
router.get("/classes",classesController.index);
router.post("/connections", connectionsController.create);
export default router;