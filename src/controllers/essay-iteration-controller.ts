import { Request, Response } from 'express';
import mongoose from 'mongoose';
import EssayIterationsService from '../services/essay_iteration_service';
import Controller from './controller';
import { sanitizeHtml } from '../helpers/sanitize_html';

const essayIterationsService = new EssayIterationsService(mongoose.model('EssayIteration'));

class EssayIterationController extends Controller {
   constructor(service: EssayIterationsService) {
      super(service);
      this.getEssayIterations = this.getEssayIterations.bind(this);
      this.insertEssayIteration = this.insertEssayIteration.bind(this);
   }

   async getEssayIterations(req: Request, res: Response) {
      const { essayId } = req.params;
      this.debug('essayId', essayId);
      return res.status(200).send(await this.service.getAll({ essayId }));
   }

   async insertEssayIteration(req: Request, res: Response) {
      this.debug('req body', req.body);
      const body = req.body;
      body.content = sanitizeHtml(req.body.content);

      const response = await this.service.insert(body);
      this.debug('response', response);
      if (response.error) { this.debug('fookin error'); return res.status(500).send(response); }
      return res.status(201).send(response);
   }

}

export default new EssayIterationController(essayIterationsService);