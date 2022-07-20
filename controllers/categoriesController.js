import connection from "../dbStrategy/database.js";

export async function listCategories(req, res) {    
    try {
        const categories = await connection.query('SELECT * FROM categories');
        res.status(200).send(categories.rows);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function insertCategories(req, res) {
    const name = res.locals.name;

    try {
        const categories = await connection.query('INSERT INTO categories (name) VALUES ($1);', [name]);
        res.send(201).send(categories.rows);
    } catch (error) {
        res.sendStatus(500);
    }
}