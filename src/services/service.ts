import mongoose from 'mongoose';
import Debug from 'debug';

const util = require('util');

class Service {
   model: mongoose.Model<mongoose.Document>;

   constructor(model: mongoose.Model<mongoose.Document>) {
      this.model = model;
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
   }

   async getAll(query: any) {
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

         return items; /* {
            total,
            error: false,
            statusCode: 200,
            data: items
         }; */
      } catch (errors) {
         return {
            errors,
            error: true,
            statusCode: 500
         };
      }
   }

   async insert(data: any) {
      const dummy = {
         name: 'dummy pizza',
         toppings: [{
            name: 'dummy topping'
         }]
      };
      const debug = Debug(`debug:${(this.constructor).name}`);
      debug(`post/${util.inspect(data, false, null)}`);
      try {
         debug(data.toppings);
         const item = await this.model.create(data);
         if (item) {
            return {
               created: item,
               error: false
            };
         }
      } catch (error) {
         console.log('error', error);
         return {
            error: true,
            errors: error.errors
         };
      }
   }

   async update(id: any, data: any) {
      try {
         const item = await this.model.findByIdAndUpdate(id, { $set: data }, { new: true });
         return {
            item,
            error: false,
            statusCode: 202
         };
      } catch (error) {
         return {
            error,
            statusCode: 500
         };
      }
   }

   async delete(id: any) {
      try {
         const item = await this.model.findByIdAndDelete(id);
         if (!item) {
            return {
               error: true,
               statusCode: 404,
               message: 'item not found'
            };
         }

         return {
            item,
            error: false,
            deleted: true,
            statusCode: 202
         };
      } catch (error) {
         return {
            error,
            statusCode: 500,
         };
      }
   }
}

export default Service;