import express from 'express';
import EssayIterationController from '../controllers/essay-iteration-controller';


export default (server: express.Express) => {

   // EssayIteration ROUTES
   server.get(`/api/iterations`, EssayIterationController.getAll);
   server.get(`/api/iterations/:essayId/`, EssayIterationController.getEssayIterations);
   server.post(`/api/iterations`, EssayIterationController.insertEssayIteration);
   server.put(`/api/iterations/:id`, EssayIterationController.update);
   server.delete(`/api/iterations/:id`, EssayIterationController.delete);

};