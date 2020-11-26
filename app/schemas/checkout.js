import Joi from '@hapi/joi';

export const CheckoutSchema = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  mail: Joi.string().required(),
  phone: Joi.required(),
  cupon: Joi.string().allow(null, ''),
  plazo: Joi.string().required(),
  nombre_hab: Joi.string().required(),
  precio_hab: Joi.number().required(),
  precio_contado: Joi.number().required(),
  producto: Joi.string().required(),
  rk: Joi.allow(null, '')
});
