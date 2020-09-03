import Joi from '@hapi/joi';

export const classAssetSchema = Joi.object().keys({
  status: Joi.boolean().required(),
  name: Joi.string().required(),
});
