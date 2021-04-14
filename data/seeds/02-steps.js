
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, instructions: 'Cook macaroni or pasta of your choice in boiling water per package instructions' },
    {recipe_id: 1, step_number: 2, instructions: 'In a medium sauce pan, bring water to simmer and dissolve sodium citrate'},
    {recipe_id: 1, step_number: 3, instructions: 'Add cheese to sauce pan and stir until completely melted'},
    {recipe_id: 1, step_number: 4, instructions: 'Drain macaroni and combine with cheese sauce'},
    {recipe_id: 2, step_number: 1, instructions: 'Mix together flour, yeast, and salt'},
    {recipe_id: 2, step_number: 2, instructions: 'Add warm water and mix until all flour is incorporated into dough'},
    {recipe_id: 2, step_number: 3, instructions: 'Knead for 15 minutes'},
    {recipe_id: 2, step_number: 4, instructions: 'Let dough rise until doubles in volume, about 1 hour'},
    {recipe_id: 2, step_number: 5, instructions: 'Flatten dough, popping any large bubbles, fold several times, and let rest for 10-20 minutes'},
    {recipe_id: 2, step_number: 6, instructions: 'Roll dough into ball until tight skin form; proof dough for 1 hour'},
    {recipe_id: 2, step_number: 7, instructions: 'Preheat oven at least 15 minutes before final rise is done'},
    {recipe_id: 2, step_number: 8, instructions: 'Bake loaf for 30 minutes or until internal temperature reaches 210F'},
    {recipe_id: 3, step_number: 1, instructions: 'Beat eggs until foamy and homogenous'},
    {recipe_id: 3, step_number: 2, instructions: 'Melt butter in non-stick skillet over medium-low heat until pan is fully coated'},
    {recipe_id: 3, step_number: 3, instructions: 'Pour eggs into skillet'},
    {recipe_id: 3, step_number: 4, instructions: 'Lightly stir eggs until cooked to desired doneness'},
  ])
};
