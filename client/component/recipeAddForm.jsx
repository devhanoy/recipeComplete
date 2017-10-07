import React from 'react'

import {RecipeProductListForm} from './recipeProductsListForm'
import {RecipeStepList} from './recipeStepListForm'

export class RecipeAddForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: Immutable.fromJS({
        title: '',
        category: '',
        steps: [],
        products: []
      })
    }

    this.titleChange = this.titleChange.bind(this)
    this.categoryChange = this.categoryChange.bind(this)
    this.productChange = this.productChange.bind(this)
    this.stepChange = this.stepChange.bind(this)
    this.productChange = this.productChange.bind(this)
    this.productAdd = this.productAdd.bind(this)
    this.addStep = this.addStep.bind(this)
  }

  titleChange (event) {
    this.setState({data: this.state.data.set('title', event.target.value)})
  }

  categoryChange (event) {
    this.setState({data: this.state.data.set('category', event.target.value)})
  }

  productChange (id) {
    return name => event => {
      const oldProducts = this.state.data.get('products')
      const index = oldProducts.findIndex(p => p.get('id') === id)
      const newProducts = oldProducts.update(index, p => p.set(name, event.target.value))
      this.setState({data: this.state.data.set('products', newProducts)})
    }
  }

  productAdd (event) {
    const cPs = this.state.data.products
    const nP = {
      id: cPs.size + 1,
      name: '',
      quantity: 0,
      unit: ''
    }

    const nCPs = [...cPs,nP]

    this.setState({data: Object.assign({}, this.state.data, { products: nCPs}) })

    event.preventDefault()
  }

  stepChange (index) {
    return event => {
      // const nSteps = this.state.data.get('steps').update(index, s => event.target.value)
      // this.setState({data: this.state.data.set('steps', nSteps)})
    }
  }

  addStep (event) {
    const nSteps = [...this.state.data.steps, '']
    this.setState( { data: Object.assign({}, this.state.data, { steps: nSteps})})
  }

  render () {
    return (
            <form className="pure-form pure-form-aligned">
              <fieldset>
                <div className="pure-control-group">
                <label>title</label>
                <input type="text" placeholder="Titre recette" onChange={this.titleChange} value={this.state.data.title}/>
                </div>
                
                <div className="pure-control-group">
                <label>category</label>
                <input type="text" placeholder="Catégorie recette" onChange={this.categoryChange} value={this.state.data.category}/>
                </div>

                <div className="pure-control-group">
                <RecipeProductListForm change={this.productChange} products={this.state.data.products} add={this.productAdd}/>
                </div>

                <div className="pure-control-group">
                <RecipeStepList steps={this.state.data.steps} onchange={this.stepChange} add={this.addStep} />
                </div>

                <button className="pure-button pure-button-primary" onClick={this.props.onAddRecipe2(() => this.state.data)}> Ajouter recette réelle</button>
                </fieldset>
            </form>
    )
  }
}
