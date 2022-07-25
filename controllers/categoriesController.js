import connection from "../dbStrategy/database.js";

export async function listCategories(req, res) {    
    try {
        const { rows: categories} = await connection.query(
            "SELECT * FROM categories;"
            );
        res.send(categories);

    } catch (error) {
        res.sendStatus(500);
    }
}

export async function insertCategories(req, res) {
    const { name } = req.body

    try {
        await connection.query(
            "INSERT INTO categories (name) VALUES ($1);", [name]);
        res.sendStatus(201);
        
    } catch (error) {
        res.sendStatus(500);
    }
}