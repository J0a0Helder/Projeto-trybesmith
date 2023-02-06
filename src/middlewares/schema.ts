import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.string().required(),
});

export default schema;