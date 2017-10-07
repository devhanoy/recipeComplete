import React from 'react'

export class RecipeAddProduct extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      productName : '',
      categoryId: 0
    },
  }

  producNameChange(event){
    this.setState({productName: event.target.value});
  }

  optionChange(event){
    this.setState({categoryId: event.target.value});
  }

  add(event){
    conole.log(`trying to add ${this.state.productName}`)
  }

  render () {
    <form>
      <label>Nom du produit :</label>
      <input type="text" onChange={event => props.producNameChange(event.target.value)}/>
      <label>Catégorie du produit :</label>
      <input list="allCategories">
      <datalist id="allCategories">
      {props.categories.map(category => 
        <option value={category.name}></option>
      )}
      </datalist>
      <button onClick={add}>Ajouter le produit</button>
    </form>
}
