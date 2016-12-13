import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Immutable from 'immutable'

import {Steps} from './component/recipeSteps'
import {RecipeResume} from './component/recipeResume'
import {RecipeResumeList} from './component/recipeResumesList'
import {addRecipe} from './actions/recipesActions'
import {mainReducer} from './reducers/recipesReducers'

const steps = [{name : 'préparer'}, {name: 'faire'}]

const completeRecipe = {
	title : 'first recipe',
	category: 'category',
	products: [
		{name: 'banana', quantity: 12, unit: 'u'},
		{name: 'chocolate', quantity: 100, unit: 'g'}
	],
	steps
}

const completeRecipe2 = {
	title : 'second recipe',
	category: 'category 2',
	products: [
		{name: 'caramel', quantity: 15, unit: 'u'},
		{name: 'fraise', quantity: 150, unit: 'g'}
	],
	steps: [...steps, 'manger']
}

fetch('/recipes/all')
.then(response => response.json())
.then(json => startBinding(json))

// startBinding([completeRecipe, completeRecipe2])

function startBinding(rec){

	const recipes = Immutable.fromJS(rec)

	function reduce(state = {}, action){
		return state
	}

	var store = createStore(mainReducer, {recipes})

	const mapStateToProps = (state) => {
		return {
			recipes: state.recipes
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			onAddRecipe2: createRecipe => event => dispatch(addRecipe(createRecipe()))
		}
	}

	var ConnectedResumes = connect(
		mapStateToProps,
		mapDispatchToProps
	)(RecipeResumeList)


	ReactDOM.render(
		<Provider store={store}>
		<ConnectedResumes />
		</Provider>,
		document.getElementById('root')
	);

}