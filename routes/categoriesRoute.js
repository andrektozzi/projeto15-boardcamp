import { Router } from "express";

import { listCategories, insertCategories} from "../controllers/categoriesController.js"
import { validateCategories } from "../middlewares/categoriesMiddleware.js";

const router = Router();

router.get("/categories", listCategories);
router.post("/categories", validateCategories, insertCategories);

export default router;