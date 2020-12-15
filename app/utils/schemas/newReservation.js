import Joi from '@hapi/joi';

export const NewReservationSchema = Joi.object({
  guest: Joi.number().required(),
  separated: Joi.string().required(),
  mark: Joi.string().required(),
});
