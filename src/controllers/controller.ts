import { Request, Response } from 'express';
import Debug from 'debug';

import Service from '../services/service';

class Controller {
   service: any;
   debug = Debug(`debug:${(this.constructor).name}`);

   constructor(service: Service) {
      this.service = service;
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
   }

   async getAll(req: Request, res: Response) {
      return res.status(200).send(await this.service.getAll(req.query));
   }

   async insert(req: Request, res: Response) {
      this.debug('req bodyyyy', req.body);
      const response = await this.service.insert(req.body);
      if (response.error) return res.status(500).send(response);
      return res.status(201).send(response);
   }

   async update(req: Request, res: Response) {
      const { id } = req.params;

      const response = await this.service.update(id, req.body);

      return res.status(response.statusCode).send(response);
   }

   async delete(req: Request, res: Response) {
      const { id } = req.params;

      const response = await this.service.delete(id);

      return res.status(response.statusCode).send(response);
   }

}

export default Controller;