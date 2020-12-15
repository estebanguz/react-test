import Joi from '@hapi/joi';

export const GuestDataSchema = Joi.object({
  guestName: Joi.string().required(),
  guestAge: Joi.number().required(),
});
