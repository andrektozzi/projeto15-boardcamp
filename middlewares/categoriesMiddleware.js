import connection from "../dbStrategy/database.js";

export async function categoriesMiddleware(req, res, next) {
    const { name } = req.body;

    if(!name) {
        return res.status(400).send("O nome não pode estar vazio!");
    }

    try {
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