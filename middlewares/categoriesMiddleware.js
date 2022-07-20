import connection from "../dbStrategy/database.js";
import categoriesSchema from "../schemas/categoriesSchema.js";

export async function validateCategories(req, res, next) {
    const { name } = req.body;

    try {
        const validation = categoriesSchema.validate(name);
        if(validation.error) return res.sendStatus(400);

        const { rows } = await connection.query('SELECT * FROM categories WHERE name = $1', [name]);
        if(rows.length !== 0) {
            return res.status(409).send("Categoria já cadastrada!");
        }
    } catch (error) {
        res.sendStatus(500);
    }

    res.locals.name = name;

    next();
}