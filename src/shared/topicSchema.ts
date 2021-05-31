import Joi from '@hapi/joi';

export const topicSchema = Joi.object().keys({
  status: Joi.boolean().required(),
  name: Joi.string().required(),
  classAsset: Joi.string().required()
});
