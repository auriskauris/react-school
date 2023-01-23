/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('product', t => {
        t.increments('id').primary()
        t.string('productname').notNullable().unique()
        t.decimal('price').notNullable()
        t.string('image').notNullable()
    })
    .createTable('customer', t => {
        t.increments('id').primary()
        t.string('firstname').notNullable()
        t.string('lastname').notNullable()
        t.string('password').notNullable()
        t.string('address').notNullable()
        t.string('phone').notNullable()
        t.string('email').notNullable()
    })  
    .createTable('order', t => {
        t.increments('id').primary()
        t.integer('customer_id').unsigned().references('id').inTable('customer').notNull()
        .onDelete('cascade')
        t.datetime('date').notNullable()
    })
    .createTable('ordered_item', t => {
        t.increments('id').primary()
        t.integer('product_id').unsigned().references('id').inTable('product').notNull()
        .onDelete('cascade')
        t.integer('quantity').notNullable()
        t.integer('order_id').unsigned().references('id').inTable('order').notNull()
        .onDelete('cascade')
    }) 
    .createTable('cart_item', t => {
        t.increments('id').primary()
        t.integer('product_id').unsigned().references('id').inTable('product').notNull()
        .onDelete('cascade')
        t.integer('quantity').notNullable()
        t.integer('customer_id').unsigned().references('id').inTable('customer').notNull()
        .onDelete('cascade')
    })   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('product')
};

