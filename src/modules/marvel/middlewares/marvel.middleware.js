const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  verifyMarvelAPIKey: celebrate({
    [Segments.QUERY]: {
      apiKey: Joi.string().required(),
    },
  }),

  verifyPayloadForCreation: celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().allow(null, ''),
    },
  }),
};



