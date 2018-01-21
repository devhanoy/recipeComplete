import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addRecipe,
  addProduct,
  changeName,
  changeProduct,
  changeQuantity,
  changeUnit,
  changeStep,
  addStep
} from "../actions/recipe.action";
import { getAllUnits } from "../actions/unit.action";
import { getAllProducts } from "../actions/product.action";

export class RecipeAddForm extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllUnits();
  }

  render() {
    return (
      <form className="pure-form pure-form-aligned">
        {/* <fieldset> */}
        <div className="pure-control-group">
          <label>title</label>
          <input
            type="text"
            placeholder="Titre recette"
            onChange={event => this.props.titleChange(event.target.value)}
            value={this.props.title}
          />
        </div>

        {/* <div className="pure-control-group">
                <label>category</label>
                <input type="text" placeholder="Catégorie recette" onChange={this.categoryChange} value={this.state.data.category}/>
                </div> */}

        <div className="pure-control-group">
          {this.props.products.map((product, index) => (
            <div key={index}>
              <label>Produit:</label>
              <input
                list="allProducts"
                value={product.product.name}
                onChange={event =>
                  this.props.productChange(event.target.value, index)
                }
              />
              <label>Quantité:</label>
              <input
                type="number"
                value={product.quantity}
                onChange={event =>
                  this.props.productQuantityChange(event.target.value, index)
                }
              />
              <label>Unite:</label>
              <select
                onChange={event =>
                  this.props.productUnitChange(event.target.value, index)
                }
              >
                {product.unitId ? null : <option />}
                {this.props.allUnits.map(unit => (
                  <option key={unit._id} value={unit._id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
          {/* <RecipeProductListForm change={this.props.productChange} products={this.state.data.products} add={this.productAdd}/> */}
          <button
            type="reset"
            className="pure-button"
            onClick={this.props.addProduct}
          >
            Ajouter produit
          </button>
        </div>
        <div className="pure-control-group">
          {this.props.steps.map((step, index) => (
            <textarea
              key={index}
              value={step}
              onChange={event =>
                this.props.stepChange(event.target.value, index)
              }
            />
          ))}
        </div>
        <button
          type="reset"
          className="pure-button"
          onClick={this.props.addStep}
        >
          Ajouter étape
        </button>

        <datalist id="allProducts">
          {this.props.allProducts.map(product => (
            <option key={product._id} value={product.name} />
          ))}
        </datalist>

        {/* <div className="pure-control-group">
                <RecipeStepList steps={this.state.data.steps} onchange={this.stepChange} add={this.addStep} />
                </div> */}

        {
          <button
            type="reset"
            className="pure-button pure-button-primary"
            onClick={this.props.addRecipe}
          >
            {" "}
            Ajouter recette réelle
          </button>
        }
        {/* </fieldset> */}
      </form>
    );
  }
}

RecipeAddForm.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  steps: PropTypes.array,
  allProducts: PropTypes.array,
  getAllProducts: PropTypes.func,
  allUnits: PropTypes.array,
  getAllUnits: PropTypes.func,
  titleChange: PropTypes.func,
  productChange: PropTypes.func,
  productQuantityChange: PropTypes.func,
  productUnitChange: PropTypes.func,
  addProduct: PropTypes.func,
  addRecipe: PropTypes.func,
  addStep: PropTypes.func,
  stepChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    products: state.recipeForm.products,
    title: state.recipeForm.title,
    steps: state.recipeForm.steps,
    allProducts: state.products,
    allUnits: state.units
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: getAllProducts(dispatch),
    titleChange: changeName(dispatch),
    productChange: changeProduct(dispatch),
    addRecipe: addRecipe(dispatch),
    addProduct: addProduct(dispatch),
    productQuantityChange: changeQuantity(dispatch),
    productUnitChange: changeUnit(dispatch),
    getAllUnits: getAllUnits(dispatch),
    addStep: addStep(dispatch),
    stepChange: changeStep(dispatch)
  };
};

export const ConnectedRecipeAddForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeAddForm);
