import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllRecipes } from '../actions/recipe.action'

export class RecipeList extends React.Component {
  componentDidMount () {
    this.props.getAllRecipes()
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.recipes.map(recipe => (
            <li key={recipe._id}><Link to={`/recipeDetail/${recipe._id}`}>{recipe.title}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array,
  getAllRecipes: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRecipes: getAllRecipes(dispatch)
  }
}

export const ConnectedRecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList)
