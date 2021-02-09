require('dotenv').config();

const sendgrid = require('@sendgrid/mail');
const config = require('./config/config');

sendgrid.setApiKey(config.api_key);

const msg = {
  to: 'damithamewan404@gmail.com',
  from: 'damithamewan201@gmail.com',
  subject: 'TEST',
  text: 'Hi, this is a test'
};

sendgrid
  .send(msg)
  .then(() => console.log('Email sent successfully.')) // eslint-disable-line no-console
  .catch(err => console.log(err)); // eslint-disable-line no-console
