import Joi from '@hapi/joi';


const fullNameSchema = Joi.string();
const emailSchema = Joi.string().email({ tlds: { allow: false } });
const passwordSchema = Joi.string().min(3);
const repeatPasswordSchema = Joi.ref('password');
const roleSchema = Joi.number();

// eslint-disable-next-line import/prefer-default-export
export const createUser = Joi.object({
  fullName: fullNameSchema.required(),
  email: emailSchema.required(),
  password: passwordSchema.required(),
  repeatPassword: repeatPasswordSchema,
  role: roleSchema.required()
});

export const updateUser = Joi.object({
  fullName: fullNameSchema,
  email: emailSchema,
  password: passwordSchema,
  repeatPassword: repeatPasswordSchema,
  role: roleSchema
});
