import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedAddCategoryProductForm } from "./component/category-product.form";
import { ConnectedRecipeCategoryProductListForm } from "./component/category-product-list";
import { ConnectedRecipeAddProduct } from "./component/product.form";
import { ConnectedProductsList } from "./component/product-list";
import { ConnectedRecipeAddForm } from "./component/recipe.form";
import { ConnectedRecipeList } from "./component/recipe-list";
import { ConnectedRecipeComplete } from "./component/recipe-complete";
import { Header } from "./header";

// import {RecipeResumeList} from './component/recipeResumesList'
import { store } from "./store-creation";

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/recipes">
      <div>
        <Header />
        <Route exact path="/" component={ConnectedAddCategoryProductForm} />
        <Route
          path="/categories"
          component={ConnectedRecipeCategoryProductListForm}
        />
        <Route path="/addProduct" component={ConnectedRecipeAddProduct} />
        <Route path="/products" component={ConnectedProductsList} />
        <Route path="/addRecipe" component={ConnectedRecipeAddForm} />
        <Route path="/recipesList" component={ConnectedRecipeList} />
        <Route
          path="/recipeDetail/:recipeId"
          component={ConnectedRecipeComplete}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
