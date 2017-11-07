import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addRecipe, addProduct, changeName, changeProduct } from '../actions/recipe.action'
import { getAllProducts } from '../actions/product.action'

export class RecipeAddForm extends React.Component {

  componentDidMount () {
    this.props.getAllProducts()
  }

  render () {
    return (
            <form className="pure-form pure-form-aligned">
              {/* <fieldset> */}
                <div className="pure-control-group">
                <label>title</label>
                <input type="text" placeholder="Titre recette" onChange={this.props.titleChange} value={this.props.title}/>
                </div>

                {/* <div className="pure-control-group">
                <label>category</label>
                <input type="text" placeholder="Catégorie recette" onChange={this.categoryChange} value={this.state.data.category}/>
                </div> */}

                <div className="pure-control-group">
                  {this.props.products.map((product, index) =>
                    <div key={product._id}>
                      <input type="text" value={product.name} onChange={event => this.props.productChange(event.target.value, index)} />
                    </div>
                  )}
                {/* <RecipeProductListForm change={this.props.productChange} products={this.state.data.products} add={this.productAdd}/> */}
                </div>
                <button type="reset" className="pure-button" onClick={this.props.addProduct}>Ajouter produit</button>

                <datalist id="allCategories">
                  {this.props.allProducts.map(product =>
                    <option key={product._id} value={product.name}></option>
                  )}
                </datalist>

                {/* <div className="pure-control-group">
                <RecipeStepList steps={this.state.data.steps} onchange={this.stepChange} add={this.addStep} />
                </div> */}

                {<button className="pure-button pure-button-primary" onClick={this.props.addRecipe}> Ajouter recette réelle</button>}
                {/* </fieldset> */}
            </form>
    )
  }
}

RecipeAddForm.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  allProducts: PropTypes.array,
  getAllProducts: PropTypes.func,
  titleChange: PropTypes.func,
  productChange: PropTypes.func,
  addProduct: PropTypes.func,
  addRecipe: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    products: state.recipeForm.products,
    title: state.recipeForm.name,
    steps: state.recipeForm.steps,
    allProducts: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: getAllProducts(dispatch),
    titleChange: changeName(dispatch),
    productChange: changeProduct(dispatch),
    addRecipe: addRecipe(dispatch),
    addProduct: addProduct(dispatch)
  }
}

export const ConnectedRecipeAddForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeAddForm)
