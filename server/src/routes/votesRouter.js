const { Router } = require("express");
const { getVotesIdUserHandler,
        getVotesProductHandler, 
        postNewVotesHandler 
      } = require('../handlers/votesHandler');

const votesRouter = Router();

votesRouter.get  ("/user/:id", getVotesIdUserHandler);
votesRouter.get  ("/:id", getVotesProductHandler);
votesRouter.post ("/new", postNewVotesHandler);

module.exports = votesRouter;