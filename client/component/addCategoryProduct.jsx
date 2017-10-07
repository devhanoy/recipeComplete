import React from 'react'

export function AddCategoryProductForm(props) {
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

