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
        <label>title: </label>
        {this.props.recipe.title}

        {/* <label>Products</label>
        <ul>
          {this.props.recipe.products.map((product, index) =>
            <li key={index}>
              {product.product.name}
              {product.quantity}
              {product.unit.name}
            </li>
          )}
        </ul>

        <label>Steps :</label>
        <ol>
          {this.props.recipe.steps.map((step, index) =>
            <li key={index}>{step}</li>
          )}
        </ol> */}
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
