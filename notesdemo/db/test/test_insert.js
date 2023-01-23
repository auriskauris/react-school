const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mypass123',
        database: 'notesdemo_db'
    }
}

const knex = require('knex')(options);

knex.on('query', console.log);  // SQL-muoto

const more_notes = [
    {
        content: "Aura on TOSI fiksu",
        date: new Date("2022-11-01T12:15:31.098Z"),
        important: true,
        user_id: 3
      },
      {
        content: "React is lovely",
        date: new Date("2022-11-10T18:39:34.091Z"),
        important: false,
        user_id: 2
      },
      {
        content: "test_insert toimii",
        date: new Date("2022-10-10T19:20:14.298Z"),
        important: true,
        user_id: 1
      }
    ]

knex('notes').insert(more_notes)
    .then(() => 
        console.log("more data inserted")
    )
    .catch((err) => { 
        console.log(err); 
        throw err
    })
    .finally(() => {
        knex.destroy();
    });