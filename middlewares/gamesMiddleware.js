import connection from "../dbStrategy/database.js";
import gamesSchema from "../schemas/gamesSchema.js";

export async function validateGames(req, res, next) {
    const validation = gamesSchema.validate(req.body, { abortEarly: false });

    if(validation.error) {
        return res.sendStatus(400);
    }

    const { rows: gameExist } = await connection.query(
        "SELECT * FROM games WHERE name = $1;", [req.body.name]
    );

    if(gameExist.length !== 0) {
        return res.sendStatus(409);
    }

    next();
}