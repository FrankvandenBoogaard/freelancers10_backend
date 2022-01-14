module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '49f300444fbe0490b2eb4e60bc40322c'),
  },
});
