import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecipe } from "../actions/recipe.action";

export class RecipeComplete extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.recipeId);
  }

  render() {
    return (
      <div>
        <div>
          <label>Title: </label>
          {this.props.recipe.title}
        </div>
        <div>
          <label>Catégorie: </label>
          {this.props.recipe.category}
        </div>
        <div>
          <label>Nombre personnes: </label>
          {this.props.recipe.nbPersons}
        </div>
        <div>
          <label>Products :</label>
          <ul>
            {this.props.recipe.products &&
              this.props.recipe.products.map(
                ({ product, quantity, unit }, index) => (
                  <li key={index}>
                    {quantity && quantity + " "}
                    {unit && unit.name && unit.name + " "}
                    {product && product.name}
                  </li>
                )
              )}
          </ul>
        </div>
        <div>
          <label>Steps :</label>
          <ol>
            {this.props.recipe.steps &&
              this.props.recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

RecipeComplete.propTypes = {
  recipe: PropTypes.object,
  getRecipe: PropTypes.func,
  recipeId: PropTypes.string
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    recipe: state.selectedRecipe,
    recipeId: props.match.params.recipeId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: getRecipe(dispatch)
  };
};

export const ConnectedRecipeComplete = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComplete);
