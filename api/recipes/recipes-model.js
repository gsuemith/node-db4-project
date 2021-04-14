const db = require('../../data/db-config')

const getRecipeById = async recipe_id => {
  const recipe = await db('recipes')
    .where('id', recipe_id)
    .first()
  
  const steps = await db('steps as st')
    .select('st.id as step_id', 'st.step_number', 'st.instructions')
    .where('recipe_id', recipe_id)
    .orderBy('st.step_number')

  recipe.steps = await Promise.all(steps.map(async step => {
    const ingredients = await db('step_ingredients as si')
      .select('i.id', 'i.name', 'si.quantity')
      .join('ingredients as i', 'i.id', 'si.ingredient_id')
      .where('si.step_id', step.step_id)

    return {...step, ingredients: ingredients}
  }))
  
  return recipe
}

module.exports = {
  getRecipeById
}