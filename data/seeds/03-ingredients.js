
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name: 'macaroni' },
    { name: 'water' },
    { name: 'cheese' },
    { name: 'sodium citrate' },
    { name: 'flour' },
    { name: 'yeast' },
    { name: 'salt' },
    { name: 'eggs' },
    { name: 'butter' },
  ])
};
