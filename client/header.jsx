import React from 'react'

import { Link } from 'react-router-dom'

export const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Ajout de catégorie</Link></li>
          <li><Link to='/categories'>Liste de catégories</Link></li>
          <li><Link to='/addProduct'>Ajout de produits</Link></li>
          <li><Link to='/products'>Liste des produits</Link></li>
        </ul>
      </nav>
    </header>
  )
