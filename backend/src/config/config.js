require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 8000,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL
};