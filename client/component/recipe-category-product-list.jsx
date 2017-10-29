import React from 'react'
import { connect } from 'react-redux'

import { getAllCategories } from '../actions/categoryProductAction'

export class RecipeCategoryProductListForm extends React.Component {

//   constructor (props) {
//     super(props)
//   }
  componentDidMount () {
    this.props.getAllCategories()
  }

  render (props) {
    return (
        <div>
            {this.props.categories.map(category =>
                <div>{ category.name }</div>
                // <div key={category.get('id')}>
                //     <span><label>Nom produit: </label><input type="text" value={category.name} onChange={props.change(category.id)('name')} /></span>
                //     <br/>
                //     <span><label>Quantité: </label><input type="text" value={category.quantity} onChange={props.change(category.id)('quantity')} /></span>
                //     <br/>
                //     <span><label>Unité: </label><input type="text" value={category.unit} onChange={props.change(category.id)('unit')} /></span>
                // </div>
            )}
            {/* <button onClick={props.add}>Ajouter produit</button> */}
        </div>
    )
  }
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
