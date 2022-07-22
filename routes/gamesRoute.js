import { Router } from "express";

import { listGames, insertGames} from "../controllers/gamesController.js";
import { validateGames } from "../middlewares/gamesMiddleware.js";

const router = Router();

router.get("/games", listGames);
router.post("/games", validateGames, insertGames);

export default router;