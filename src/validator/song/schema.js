const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
  performer: Joi.string(),
  duration: Joi.number(),
  albumId: Joi.string(),
});
module.exports = { SongPayloadSchema };
