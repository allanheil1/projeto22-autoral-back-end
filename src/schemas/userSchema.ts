import joi from "joi";

export const userSchema = joi.object({
  login: joi.string().min(2).required(),
  name: joi.string().email().required(),
  password: joi.string().required(),
  isAdm: joi.bool().required(),
  code: joi.string().required().length(6),
});
