import Joi from "@hapi/joi";

export const PaymentMethodSchema = Joi.object({
  cardNumber: Joi.number().required(),
  cardName: Joi.string().required(),
  cardExp: Joi.string().required(),
  cardCvc: Joi.number().required(),
  cardType: Joi.string().required(),
  cardBank: Joi.string().required(),
  cardConcept: Joi.string().required(),
  quantity: Joi.number().required(),
});
