/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('order').del()
    await knex('order').insert([
        {
            id: 1,
            customer_id: 2,
            date: new Date("2022-11-10T17:30:31.098Z")
        },
        {   id: 2,
            customer_id: 1,
            date: new Date("2022-11-10T18:39:34.091Z")
        },
        {
            id: 3,
            customer_id: 3,
            date: new Date("2022-11-10T17:30:31.098Z")
        }    
    ]);
  };