import mongoose from 'mongoose';
// import Debug from 'debug';

import Service from './Service';


export default class EssayIterationService extends Service {
   constructor(model: mongoose.Model<mongoose.Document>) {
      super(model);
   }

   insert = async (data: any) => {
      if (data.isCorrection) {
         const { essayId, iteration } = data;
         const essayIteration: any = await this.getAll({ essayId, iteration });

         await this.update(essayIteration._id, { correction: data });
      }

      try {
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
}