const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//** ROTA DE SESSÃO */

routes.post('/sessions', SessionController.create )


//** ROTAS DE ONGS */
routes.get('/ongs', OngController.index); //GET
routes.post('/ongs', celebrate({ //POST
  [Segments.BODY]: Joi.object().keys({ // Validação com Joi, para rota de POST
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

//** ROTAS DE INCIDENTS */

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete )

//** ROTA DE PROFILE */

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),  
  }).unknown(),
}),  ProfileController.index);


module.exports = routes;