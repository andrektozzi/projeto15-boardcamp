import categoriesSchema from "../schemas/categoriesSchema.js";

export async function validateCategories(req, res, next) {
    const newCategory = req.body;

    try {
        const validation = categoriesSchema.validate(newCategory);
        if(validation.error){
            return res.sendStatus(400);
        }

    } catch (error) {
        res.sendStatus(500);
    }
    
    next();
}