const express = require('express')
const Recipes = require('./recipes-model')


const router = express.Router()


router.get('/:id', (req, res) => {
  Recipes.getRecipeById(req.params.id)
  .then(recipe => {
    if(recipe){
      res.status(200).json(recipe)
    } else {
      res.status(404).json({ message: "Recipe not found" })
    }
  })
  .catch(err => res.status(500).json({ message: err.message }))
})


module.exports = router