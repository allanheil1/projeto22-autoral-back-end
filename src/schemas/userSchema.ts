import joi from "joi";

export const userSignUpSchema = joi.object({
  isAdm: joi.bool().required(),
  login: joi.string().min(4).required(),
  name: joi.string().required(),
  password: joi.string().required(),
  code: joi.string().length(6),
});

export const userSignInSchema = joi.object({
  login: joi.string().min(4).required(),
  password: joi.string().required(),
});