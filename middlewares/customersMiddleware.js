import customersSchema from "../schemas/customersSchema.js";

export async function validateCustomer(req, res, next) {
    const validation = customersSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        return res.sendStatus(400);
    }

    next();
}