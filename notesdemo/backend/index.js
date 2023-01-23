const express = require('express')
const app = express()
app.use(express.json());
const config = require('./utils/config')
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);
knex.on('query', console.log);  // DEBUG
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


/********käynnistä servu************ */  
const PORT = config.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })