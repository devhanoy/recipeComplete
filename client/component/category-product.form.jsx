import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {addCategoryProduct, categoryProductNameChange} from '../actions/category-product.action'

export function AddCategoryProductForm (props) {
  return (
    <form className="pure-form pure-form-aligned">
      <fieldset>
        <div className="pure-control-group">
        <label>Catégorie</label>
        <input type="text" placeholder="Nom catégorie" onChange={event => props.categoryProductNameChange(event.target.value)} value={props.categoryProduct} />
        </div>

        <button className="pure-button pure-button-primary" type="reset" onClick={event => props.addCategoryProduct()}> Ajouter catégorie produit</button>
        </fieldset>
    </form>
  )
}

AddCategoryProductForm.propTypes = {
  categoryProduct: PropTypes.string,
  categoryProductNameChange: PropTypes.func,
  addCategoryProduct: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    categoryProduct: state.categoryProductFormName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategoryProduct: addCategoryProduct(dispatch),
    categoryProductNameChange: categoryProductNameChange(dispatch)
  }
}

export const ConnectedAddCategoryProductForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddCategoryProductForm)
