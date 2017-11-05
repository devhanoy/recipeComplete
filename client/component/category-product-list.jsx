import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAllCategories } from '../actions/category-product.action'

export class RecipeCategoryProductListForm extends React.Component {

  componentDidMount () {
    this.props.getAllCategories()
  }

  render (props) {
    return (
        <div>
            {this.props.categories.map(category =>
                <div key={category._id} >{ category.name }</div>
            )}
        </div>
    )
  }
}

RecipeCategoryProductListForm.propTypes = {
  categories: PropTypes.array,
  getAllCategories: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryProduct
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: getAllCategories(dispatch)
  }
}

export const ConnectedRecipeCategoryProductListForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(RecipeCategoryProductListForm)
