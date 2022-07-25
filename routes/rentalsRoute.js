import { Router } from "express";

import { listRentals, insertRental, returnRental, deleteRental } from "../controllers/rentalsController.js";
import { validateRental, validateReturnRental, validateDeleteRental } from "../middlewares/rentalsMiddleware.js";

const router = Router();

router.get("/rentals", listRentals);
router.post("/rentals", validateRental, insertRental);
router.post("/rentals/:id/return", validateReturnRental, returnRental);
router.delete("/rentals:id", validateDeleteRental, deleteRental);

export default router;