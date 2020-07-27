import { Request, Response } from 'express';
import mongoose from 'mongoose';
import EssayService from '../services/essay_service';
import Controller from './controller';

const essayService = new EssayService(mongoose.model('Essay'));

class EssayController extends Controller {

   constructor(service: EssayService) {
      super(service);
   }

}

export default new EssayController(essayService);