var express = require('express');
var router = express.Router();

const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', function(req, res, next) {
    const user = req.body;
    console.log(user);

    knex('users').select('*').where('username', '=', user.username)
    .then((dbuser) => {
        if (dbuser.length == 0) {
            return res.status(401).json(
                { error: "invalid username or password" }
            )
        }
        const tempUser = dbuser[0];
        bcrypt.compare(user.password, tempUser.password)
            .then((passwordCorrect) => {
                if (!passwordCorrect) {
                    return res.status(401).json(
                        { error: "invalid username or password" }
                    )
                } 
                //token
                const userForToken = {
                    username: tempUser.username,
                    id: tempUser.id
                } 
                const token = jwt.sign(userForToken, config.SECRET)
                console.log(token);
                res.status(200).send({
                    token,
                    username: tempUser.username,
                    role: "regularuser"
                })
            })
        })
        .catch(error => {
        return res.status(500).json(
            { error: "invalid username or password" }
    )})
})


module.exports = router;