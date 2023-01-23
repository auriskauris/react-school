var express = require('express');
var router = express.Router();

const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);


//POST
router.post('/', function(req, res, next) {
    const userid = res.locals.auth.userId;
    const note = req.body;
    const newNote = {
        content: note.content,
        important: note.important,
        date: new Date(note.date),
        user_id: userid
    }
    if (note.content === undefined || note.date === undefined || note.important === undefined) {
        return res.status(400).json(
        { error: "check json-data" }        
    )
}

    knex('notes').insert(newNote)
    .then(id_arr => {
        console.log(id_arr);
        newNote.id = id_arr[0];
        res.json(newNote);
    }) 
    .catch(error => {
        res.status(500).res.json(error);
    })
})

//GET
router.get('/', function(req, res, next) {
    const userid = res.locals.auth.userId;
    knex('notes').select('*').where('user_id', "=", userid)
    .then((rows) => {
        console.log(rows);
        res.json(rows);
    })
    .catch(error => {
      res.status(500).res.json(error);
    })
})

//DELETE
router.delete('/:id', function(req, res, next) { 
    const userid = res.locals.auth.userId;
    const id = req.params.id;
    console.log(id);
  
    knex('notes').where('user_id', '=', userid).andWhere('id', '=',id).del()
      .then(status => {
          console.log("delete ok")
          res.status(204).end();
        })
        .catch(error => {
         res.status(500).res.json(error);
    })
})

//PUT    
router.put('/:id', function(req, res, next) { 
    const userid = res.locals.auth.userId;
    const id = req.params.id;
    const note = req.body;
  
    const updatedNote = {
      content: note.content,
      date: new Date(note.date),
      important: note.important
    } 
    if (note.content === undefined || note.date === undefined || note.important === undefined) {
      return res.status(400).json(
          { error: "check json-data" }
      )
  }
  
    knex('notes').update(updatedNote).where('id', '=', userid)
     .then((response) => {
        console.log(response)
        res.status(204).end();
    })
     .catch(error => {
      res.status(500).res.json(error);
    })
})



module.exports = router;