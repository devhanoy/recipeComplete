import React from 'react'

export const RecipeProductListForm = (props) =>
 (
    <div>
        {props.products.map(product =>
            <div key={product.get('id')}>
                <span><label>Nom produit: </label><input type="text" value={product.get('name')} onChange={props.change(product.get('id'))('name')} /></span>
                <br/>
                <span><label>Quantité: </label><input type="text" value={product.get('quantity')} onChange={props.change(product.get('id'))('quantity')} /></span>
                <br/>
                <span><label>Unité: </label><input type="text" value={product.get('unit')} onChange={props.change(product.get('id'))('unit')} /></span>
            </div>
        )}
        <button onClick={props.add}>Ajouter produit</button>
    </div>
)
