import jwt from 'koa-jwt';
import jwks from 'jwks-rsa';

const options = {
  secret: jwks.koaJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://firmamentum.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'notify.jakeking.co.uk',
  issuer: 'https://firmamentum.eu.auth0.com/'
};

export default jwt(options);
