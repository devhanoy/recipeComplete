import React from 'react'
import {RecipeResume} from './recipeResume'
import {RecipeAddForm} from './recipeAddForm'
import {deleteRecipe} from '../actions/recipesActions'


export const RecipeResumeList = ({recipes, onAddRecipe, onAddRecipe2, deleteRecipe}) => (
    <div>
        {recipes.map(recipe =>
            <RecipeResume key={recipe.get('_id')} title={recipe.title} category={recipe.category} deleteReci={ deleteRecipe(recipe._id) } />
        )}
        <RecipeAddForm onAddRecipe2={onAddRecipe2} />
    </div>
)

// 