import React from 'react'

export const RecipeResume = ({title, category, deleteReci}) => (
    <div>
        <h4>{ title }</h4>
        <span>{category}</span>
        <button onClick={ deleteReci }>Supprimer recette</button>
    </div>
)
