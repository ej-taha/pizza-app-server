import express from 'express';
import EssayController from '../controllers/essays_controller';
import EssayIterationController from '../controllers/essay-iteration-controller';


export default (server: express.Express) => {

   // Essay ROUTES
   server.get(`/api/essays`, EssayController.getAll);
   server.get(`/api/essays/:essayId/iterations`, EssayIterationController.getEssayIterations);
   server.post(`/api/essays`, EssayController.insert);
   server.put(`/api/essays/:id`, EssayController.update);
   server.delete(`/api/essays/:id`, EssayController.delete);

};