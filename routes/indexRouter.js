import { Router } from "express";

import categoriesRoute from "./categoriesRoute.js";
import gamesRoute from "./gamesRoute.js";

const router = Router();
router.use(categoriesRoute);
router.use(gamesRoute);

export default router;