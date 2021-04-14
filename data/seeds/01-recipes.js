
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Mac and Cheese' },
    { name: 'Bread' },
    { name: 'Scrambled Eggs' }
  ])
};
