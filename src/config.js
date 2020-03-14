export default {
  mongo: {
    host: process.env.MONGO_HOST || 'mongodb',
    port: process.env.MONGO_PORT || 27017,
  },
  auth: {
    client: {
      domain: process.env.AUTH_DOMAIN || '',
      audience: process.env.AUTH_AUDIENCE || '',
    },
    basic: {
      username: process.env. BASIC_AUTH_USERNAME || 'username',
      password: process.env.BASIC_AUTH_PASSWORD || 'password',
    }
  }
};
