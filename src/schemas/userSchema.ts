import joi from "joi";

export const userSchema = joi.object({
  isAdm: joi.bool().required(),
  login: joi.string().min(2).required(),
  name: joi.string().required(),
  password: joi.string().required(),
  code: joi.string().required().length(6),
});