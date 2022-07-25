import connection from "../dbStrategy/database.js";
import categoriesSchema from "../schemas/categoriesSchema.js";

export async function validateCategories(req, res, next) {
   const validation = categoriesSchema.validate(req.body, { aboutEarly: false });
   const { name } = req.body;

   if(validation.error) {
    return res.sendStatus(400);
   }

   const { rows: categoryExist } = await connection.query(
    "SELECT * FROM categories WHERE name = $1;", [name]
   );

   if(categoryExist.length !== 0) {
    return res.sendStatus(409);
   }
    
    next();
}