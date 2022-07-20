import { Router } from "express";

import categoriesRoute from "./categoriesRoute.js";

const router = Router();
router.use(categoriesRoute);

export default router;