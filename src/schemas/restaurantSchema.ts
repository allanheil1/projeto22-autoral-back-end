import joi from "joi";

export const restaurantSchema = joi.object({
  name: joi.string().min(4).required(),
  tables: joi.number().min(1).required(),
  photo: joi.string(),
  code: joi.string().length(6).required(),
});
