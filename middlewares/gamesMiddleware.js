import gamesSchema from "../schemas/gamesSchema.js";

export async function validateGames(req, res, next) {
    const validation = gamesSchema.validate(req.body, { abortEarly: false });

    if(validation.error) {
        return res.sendStatus(400);
    }

    next();
}