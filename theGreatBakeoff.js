const bakeryHasIngredient = (bakery, ingredients) => {
  for (const ingredient of ingredients) {
    if (bakery.includes(ingredient)) {
      return true;
    }
  }

  return false;
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (recipe of recipes) {
    if (
      bakeryHasIngredient(bakeryA, recipe.ingredients) &&
      bakeryHasIngredient(bakeryB, recipe.ingredients)
    ) {
      return recipe.name;
    }
  }
};
