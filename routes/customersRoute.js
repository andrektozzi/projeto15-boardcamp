import { Router } from "express";

import { listCustomers, listCustomersById, insertCustomer, updateCustomer } from "../controllers/customersControllers.js";
import { validateCustomer, validateListCustomer } from "../middlewares/customersMiddleware.js";

const router = Router();

router.get("/customers", listCustomers);
router.get("/customers/:id", validateListCustomer, listCustomersById);
router.post("/customers", validateCustomer, insertCustomer);
router.put("/customers/:id", validateCustomer, updateCustomer);

export default router;