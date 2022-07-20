import { Router } from "express";

import { listCategories, insertCategories} from "../controllers/categoriesController.js"
import { categoriesMiddleware } from "../middlewares/categoriesMiddleware.js";

const router = Router();

router.get("/categories", listCategories);
router.post("/categories", categoriesMiddleware, insertCategories);

export default router;