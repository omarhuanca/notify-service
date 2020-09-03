import Joi from '@hapi/joi';

export const notifySchema = Joi.object().keys({
  status: Joi.boolean().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  classAsset: Joi.string().required(),
});
