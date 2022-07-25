import joi from "joi";

const rentalsSchema = joi.object({
    daysRented: joi.number().greater(0).required(),
    gameId: joi.number().required(),
    customerId: joi.number().required()
});

export default rentalsSchema;