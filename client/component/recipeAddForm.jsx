import React from 'react'
import Immutable from 'immutable'

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
    const cPs = this.state.data.get('products')
    const nP = Immutable.Map({
      id: cPs.size + 1,
      name: '',
      quantity: 0,
      unit: ''
    })

    const nCPs = cPs.push(nP)

    this.setState({data: this.state.data.set('products', nCPs)})
  }

  stepChange (index) {
    return event => {
      const nSteps = this.state.data.get('steps').update(index, s => event.target.value)
      this.setState({data: this.state.data.set('steps', nSteps)})
    }
  }

  addStep (event) {
    const nSteps = this.state.data.get('steps').push('')
    this.setState({data: this.state.data.set('steps', nSteps)})
  }

  render () {
    return (
            <div>
                <label>title</label><input type="text" onChange={this.titleChange} value={this.state.data.get('title')}/>
                <label>category</label><input type="text" onChange={this.categoryChange} value={this.state.data.get('category')}/>
                <RecipeProductListForm change={this.productChange} products={this.state.data.get('products')} add={this.productAdd}/>
                <RecipeStepList steps={this.state.data.get('steps')} onchange={this.stepChange} add={this.addStep} />

                <button onClick={this.props.onAddRecipe2(() => this.state.data)}> Ajouter recette réelle</button>
            </div>
    )
  }
}

