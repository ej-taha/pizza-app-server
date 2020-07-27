import { Request, Response } from 'express';
import Debug from 'debug';

import { Service } from '../services/service';

class Controller {
   service;
   debug = Debug(`debug:${(this.constructor).name}`);

   constructor(service) {
      this.service = service;
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
   }

   async getAll(req, res) {
      return res.status(200).send(await this.service.getAll(req.query));
   }

   async insert(req, res) {
      this.debug('req bodyyyy', req.body);
      const response = await this.service.insert(req.body);
      if (response.error) return res.status(500).send(response);
      return res.status(201).send(response);
   }

   async update(req, res) {
      const { id } = req.params;

      const response = await this.service.update(id, req.body);

      return res.status(response.statusCode).send(response);
   }

   async delete(req, res) {
      const { id } = req.params;

      const response = await this.service.delete(id);

      return res.status(response.statusCode).send(response);
   }

}

export default Controller;