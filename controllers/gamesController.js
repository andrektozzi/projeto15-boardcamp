import connection from "../dbStrategy/database.js"

export async function listGames(req, res) {
    const { name } = req.query;
  
    try {
      if (name) {
        const { rows: games } = await connection.query(
          `SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id WHERE games.name ILIKE '${name}%';`
        );
        return res.send(games);
      } else {
        const { rows: games } = await connection.query(
          `SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id;`
        );
        return res.send(games);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }

  export async function insertGames(req, res) {
    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
  
    try {
      await connection.query(
        `INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5);`,
        [name, image, Number(stockTotal), categoryId, Number(pricePerDay)]
      );
  
      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(500);
    }
  }