const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const Model = require('../models/recipe')
const app = require('../app')

chai.use(chaiHttp)

const fakeRecipe = {
  title: 'Recette de test',
  products: [{ name: 'Filets de poulet', quantity: 2, unit: 'unité' },
    { name: 'Crème fraîche', quantity: 50, unit: 'g' }],
  steps: ['Faire dorer les filets de poulets à la poêle',
    "Ajouter la crème à la fin de la cuisson afin qu'elle devienne liquide",
    'Servir accompagnée de pâtes ou de pommes de terre'],
  category: 'Plat principal',
  test: true
}

describe('recipe CRUD', () => {
  let recipeOfWork

  before(() => {
    const recipe = new Model(fakeRecipe)
    return recipe.save()
      .then(r => {
        recipeOfWork = r
        return true
      })
  })

  it('create', () => {
    const recipe = new Model(fakeRecipe)
    return recipe.save()
      .then(r => {
        return expect(r).not.to.be.null
      })
  })

  it('select all', () => {
    return Model.find({})
      .then(rList => {
        expect(rList).not.to.be.null
        expect(rList).to.be.an.instanceof(Array)
        return expect(rList).not.to.be.empty
      })
  })

  it('select one', () => {
    let titleToLook = recipeOfWork.title
    return Model.findOne({ title: titleToLook })
      .then(recipe => {
        expect(recipe).not.to.be.null
        expect(recipe).to.have.property('title')
        return expect(recipe.title).to.equal(titleToLook)
      })
  })

  it('select by id', () => {
    return Model.findById(recipeOfWork._id)
      .then(recipe => {
        expect(recipe).not.to.be.null
        expect(recipe).to.have.property('_id')
        expect(recipe._id).to.have.property('id')
        return expect(recipe._id).to.deep.equal(recipeOfWork._id)
      })
  })
})

describe('recipe base REST API', () => {
  let recipeOfWork

  before(() => {
    const recipe = new Model(fakeRecipe)
    return recipe.save()
      .then(r => {
        recipeOfWork = r
        return true
      })
  })

  it('recipe/all', () => {
    return chai.request('http://localhost:3000')
      .get('/recipes/all')
      .then(res => {
        expect(res).to.be.json
        expect(res).to.have.status(200)
        expect(res.body).not.to.be.null
        expect(res.body).to.be.an.instanceOf(Array)
        return expect(res.body).not.to.be.empty
      })
  })

  it('recipe/get/id', () => {
    return chai.request('http://localhost:3000')
      .get(`/recipes/get/${recipeOfWork._id}`)
      .then(res => {
        return expect(res).to.have.status(200)
      })
  })
})
