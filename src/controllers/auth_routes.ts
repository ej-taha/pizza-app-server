import express from 'express';
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';

// const User = mongoose.model('User');
const router = express.Router();

/* router.post('/signup', async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = new User({ email, password });
      await user.save();

      const token = jsonwebtoken.sign({ userId: user._id }, 'SECRET_KEY');

      res.send({ token });
   } catch (error) {
      return res.status(422).send(error.message);
   }
});

router.post('/signin', async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(422).send({ error: 'must provide email/password' });
   }

   const user: any = await User.findOne({ email });

   if (!user) {
      return res.status(404).send({ error: 'invalid email/password' });
   }

   try {
      await user.comparePassword(password);
      const token = jsonwebtoken.sign({ userId: user._id }, 'SECRET_KEY');

      res.send({ token });
   } catch (error) {
      return res.status(422).send({ error: 'invalid email/password' });
   }
}); */

export default router;