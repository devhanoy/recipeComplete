import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addProduct, changeFormCategory, changeFormName } from '../actions/product.action'
import { getAllCategories } from '../actions/category-product.action'

export class RecipeAddProduct extends React.Component {
  componentDidMount () {
    this.props.getAllCategories()
  }

  render () {
    return (
      <form>
        <label>Nom du produit :</label>
        <input type="text" className="pure-control-group" onChange={event => this.props.producNameChange(event.target.value)}/>
        <label>Catégorie du produit :</label>
        <input list="allCategories" className="pure-control-group" onChange={event => this.props.categoryChange(event.target.value)}/>
        <datalist id="allCategories">
          {this.props.categories.map(category =>
            <option key={category._id} value={category.name}></option>
          )}
        </datalist>
        <button className="pure-button pure-button-primary" onClick={this.props.addProduct} type="reset">Ajouter le produit</button>
      </form>
    )
  }
}

RecipeAddProduct.propTypes = {
  categories: PropTypes.array,
  categoryChange: PropTypes.func,
  producNameChange: PropTypes.func,
  addProduct: PropTypes.func,
  getAllCategories: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryProduct
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: getAllCategories(dispatch),
    addProduct: addProduct(dispatch),
    categoryChange: changeFormCategory(dispatch),
    producNameChange: changeFormName(dispatch)
  }
}

export const ConnectedRecipeAddProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeAddProduct)
