var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

/* GET users listing. */
router.post('/', function(req, res, next) {

  const user = req.body;
  const saltRounds = 10;
  console.log(user);
     
  bcrypt.hash(user.password, saltRounds)
      .then((passwordHash) => {
          const newUser = {
              username: user.username,
              password: passwordHash, 
              email: user.email
          }
          knex('users').insert(newUser)
              .then(() => {
                  console.log("register onnistui")
                  res.status(204).end()
              })
              .catch(() => {
                return res.status(401).json(
                    { error: "check username or email" })
            })    
      })
});

module.exports = router;
