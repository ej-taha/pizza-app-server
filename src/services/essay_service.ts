import mongoose from 'mongoose';
import Debug from 'debug';

import Service from './Service';


class EssayService extends Service {
   constructor(model: mongoose.Model<mongoose.Document>) {
      super(model);
   }

   insert = async (data: any) => {
      const debug = Debug(`debug:${(this.constructor).name}`);
      debug('body', data);
      const userId = data.userId;
      /* const userEssays = (await this.getAll({ userId }));
      if (userEssays.error) {
         return {
            error: true,
            errors: userEssays.errors
         };
      } */

      const essay = {
         userId,
         active: true,
         // essayNumber: userEssays.total + 1,
         // iterations: [] as any[],
      };

      try {
         const essayDoc = await this.model.create(essay);
         if (essayDoc) {
            debug('essayDoc', essayDoc);
            return {
               created: essayDoc,
               error: false
            };
         }
      } catch (error) {
         debug('error', error);
         return {
            error: true,
            message: error.errmsg || 'Not able to create item',
            errors: error.errors
         };
      }
   }
}

export default EssayService;