/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('product').del()
    await knex('product').insert([
        {
            id: 1,
            productname: "Auran affirmaatiot",
            price: "130",
            image: "https://cdn.pixabay.com/photo/2019/03/26/21/18/toilet-4083702__340.jpg"
        },
        {
            id: 2,
            productname: "Potrettikuvaus",
            price: "300",
            image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__340.jpg"
        },
        {
            id: 3,
            productname: "Printti",
            price: "60",
            image: "https://media.istockphoto.com/id/139676576/photo/paper-feed-horizontal.jpg?b=1&s=170667a&w=0&k=20&c=jXIcs_ul8OUrSytyBbR5NoVYl_ccpswbwGS_h29dVo4="
        }    
    ]);
  };