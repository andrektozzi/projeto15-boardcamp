import { Router } from "express";

import categoriesRoute from "./categoriesRoute.js";
import gamesRoute from "./gamesRoute.js";
import customersRoute from "../routes/customersRoute.js";

const router = Router();
router.use(categoriesRoute);
router.use(gamesRoute);
router.use(customersRoute);

export default router;