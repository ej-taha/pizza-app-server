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
      const response = await this.service.getAll(req.query);
      if (response.error)
         return res.status(response.statusCode).send(response.items);
      return res.status(response.statusCode).send(response.errorMessage);
   }

   async insert(req, res) {
      this.debug('req bodyyyy', req.body);
      const response = await this.service.insert(req.body);
      if (response.errorMessage)
         return res.status(500).send(response);
      return res.status(201).send(response.created);
   }

   async update(req, res) {
      const { id } = req.params;

      const response = await this.service.update(id, req.body);

      if (response.error)
         return res.status(response.statusCode).send(response.errorMessage);
      return res.status(response.statusCode).send(response.updated);
   }

   async delete(req, res) {
      const { id } = req.params;

      const response = await this.service.delete(id);

      if (response.error)
         return res.status(response.statusCode).send(response.errorMessage)
      return res.status(response.statusCode).send(response.deleted);
   }

}

export default Controller;