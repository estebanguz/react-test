import Joi from "@hapi/joi";

export const ContactInfoSchema = Joi.object({
  phone1: Joi.string().required(),
  email1: Joi.string().required(),
});
