import React from 'react'

export const RecipeResume = (props) => (
  <div>
    <ul>
      <li className="message">{ props.title }</li>
      <li className="message">Produits :
        <ul>
          {props.products.map((product) => <li>{ product.name } : { product.quantity } { product.unit }</li>) }
        </ul>
      </li>
      <li className="message">Etapes
        <ul>
          {props.steps.map((step) => <li>{step.name}</li>) }
        </ul>
      </li>
      <li className="message">{ props.category }</li>
    </ul>
  </div>
)
