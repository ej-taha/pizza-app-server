import jwt from 'express-jwt';
import jwksRSA from 'jwks-rsa';
import mongoose from 'mongoose';

// const User = mongoose.model('User');

export const checkJwt = jwt({
   secret: jwksRSA.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://dev-ua5quy8g.eu.auth0.com/.well-known/jwks.json`
   }),

   // Validate the audience and the issuer.
   audience: '04Ij3OHRbFSuxSvHfVsj9WR3fAOtwwTO',
   issuer: `https://dev-ua5quy8g.eu.auth0.com/`,
   algorithms: ['RS256']
});

/* export default (req: any, res: any, next: any) => {
   const { authorization } = req.headers;

   if (!authorization) {
      return res.status(401).send({ error: 'msg' });
   }

   const token = authorization.replace('Bearer ', '');
   jsonwebtoken.verify(token, 'SECRET_KEY', async (err: any, payload: any) => {
      if (err) {
         return res.status(401).send({ error: 'msg' });
      }
      const { userId } = payload;

      const user = await User.findById(userId);
      req.user = user;
      next();
   });
}; */