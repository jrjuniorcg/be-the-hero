const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;


/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Atualizar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

   /**
    * SQL: MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER
    * NoSQL: MongoDB, CouchDB
    */

    /**
     * 
     * Driver: SELECT * FRIN users
     * Query Builder> table('users).select('*').where()
     */