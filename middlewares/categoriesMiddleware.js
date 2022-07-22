import categoriesSchema from "../schemas/categoriesSchema.js";

export async function validateCategories(req, res, next) {
   const validation = categoriesSchema.validate(req.body, { aboutEarly: false });

   if(validation.error) {
    return res.sendStatus(400);
   }
    
    next();
}