import connection from "../dbStrategy/database.js";
import customersSchema from "../schemas/customersSchema.js";

export async function validateCustomer(req, res, next) {
    const validation = customersSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      console.log(validation.error.details);
      return res.sendStatus(400);
    }
  
    const { rows: cpfExist } = await connection.query(
      "SELECT * FROM customers WHERE cpf = $1;",
      [req.body.cpf]
    );
  
    if (cpfExist.length !== 0) {
      return res.sendStatus(409);
    }
  
    next();
  }

export async function validateListCustomer(req, res, next) {
    const { id } = req.params;
    const { rows: customer } = await connection.query(
      `SELECT * FROM customers WHERE id = $1;`,
      [id]
    );
  
    if (customer.length === 0) {
      return res.sendStatus(404);
    }
  
    res.locals.customer = customer;
    next();
  }