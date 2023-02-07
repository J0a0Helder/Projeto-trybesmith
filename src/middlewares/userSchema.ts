import Joi from 'joi';

const validateUserObject = (input: object) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3),
    vocation: Joi.string().required().min(3),
    level: Joi.number().required().min(1),
    password: Joi.string().required().min(8),
  });
  return schema.validate(input);
};

export default validateUserObject;