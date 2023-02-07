import Joi from 'joi';

const validateObject = (input: object) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    amount: Joi.string().required().min(3),
  });
  return schema.validate(input);
};

export default validateObject;