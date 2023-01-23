/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('ordered_item').del()
    await knex('ordered_item').insert([
        {
            id: 1,
            product_id: 1,
            quantity: 1,
            order_id: 1
        },
        {
            id: 2,
            product_id: 3,
            quantity: 14,
            order_id: 2
        },
        {
            id: 3,
            product_id: 2,
            quantity: 1,
            order_id: 3
        }   
    ]);
  };