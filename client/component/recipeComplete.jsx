import React from 'react'

export const RecipeResume = (props) => (
    <div>
        <ul>
            <li class="message">{ props.title }</li>
            <li class="message">Produits :
                <ul>
                {props.products.map((product) => <li>{ product.name } : { product.quantity } { product.unit }</li>) }
                </ul>
            </li>
            <li class="message">Etapes
                <ul>
                {props.steps.map((step) => <li>{step.name}</li>) }
                </ul>
            </li>
            <li class="message">{ props.category }</li>
        </ul>
    </div>
)
