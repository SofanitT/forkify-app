import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const { async } = require('regenerator-runtime');

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

//not blocking any function because its async
//its a promise
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1)Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};


const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();