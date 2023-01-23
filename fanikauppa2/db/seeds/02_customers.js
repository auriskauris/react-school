const testPassword = "salasana"

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hashedpassword = bcrypt.hashSync(testPassword, salt);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('customer').del()
    await knex('customer').insert([
        {
            id: 1,
            firstname: "Aura",
            lastname: "Jumala",
            password: hashedpassword,
            address: "Hepolamminkatu 10",
            phone: "0505718759",
            email: "aurajuusto@hotmail.fi"
        },
        {
            id: 2,
            firstname: "Rokki",
            lastname: "Tähti",
            password: hashedpassword,
            address: "Hervanta 1",
            phone: "050123456",
            email: "rokkenrolliolli@gmail.fi"
        },
        {
            id: 3,
            firstname: "Ansku",
            lastname: "Veleho",
            password: hashedpassword,
            address: "Hervanta 5",
            phone: "0500290320",
            email: "anskubansku@hotmail.fi"
        }    
    ]);
  };