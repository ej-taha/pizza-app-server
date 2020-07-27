import mongoose from 'mongoose';
import Debug from 'debug';

export class Service {
   model;

   constructor(model) {
      this.model = model;
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
   }

   async getAll(query) {
      const debug = Debug(`debug:${(this.constructor).name}`);
      let { skip, limit } = query;

      skip = skip ? Number(skip) : 0;
      limit = limit ? Number(limit) : 10;

      delete query.skip;
      delete query.limit;

      if (query._id) {
         try {
            query._id = new mongoose.mongo.ObjectId(query._id);
         } catch (error) {
            debug('not able to generate mongoose id with content', query._id);
         }
      }

      try {
         const items = await this.model
            .find(query);
         // .skip(skip)
         // .limit(limit);
         const total = await this.model.countDocuments({});

         debug(items);

         return {
            items,
            error: false,
            statusCode: 200,
         };
      } catch (errors) {
         return {
            errorMessage: errors,
            error: true,
            statusCode: 500
         };
      }
   }

   async insert(data) {
      const debug = Debug(`debug:${(this.constructor).name}`);
      try {
         debug(data.toppings);
         const item = await this.model.create(data);
         if (item) {
            return {
               error: false,
               created: item,
            };
         }
      } catch (error) {
         return {
            error: true,
            errorMessage: error
         };
      }
   }

   async update(id, data) {
      try {
         const item = await this.model.findByIdAndUpdate(id, { $set: data }, { new: true });
         return {
            updated: item,
            error: false,
            statusCode: 202
         };
      } catch (error) {
         return {
            error: true,
            errorMessage: error
            statusCode: 500
         };
      }
   }

   async delete(id) {
      try {
         const item = await this.model.findByIdAndDelete(id);
         if (!item) {
            return {
               error: true,
               statusCode: 404,
               errorMessage: 'item not found'
            };
         }

         return {
            error: false,
            deleted: item,
            statusCode: 202
         };
      } catch (error) {
         return {
            error: true,
            errorMessage: error,
            statusCode: 500,
         };
      }
   }
}
