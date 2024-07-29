// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  // Inicializa el número máximo de pasteles a un valor alto
  let maxCakes = Infinity;

  // Recorre cada ingrediente necesario en la receta
  for (let ingredient in recipe) {
    // Verifica si el ingrediente está en los ingredientes disponibles
    if (available[ingredient] === undefined) {
      // Si no está en los ingredientes disponibles, devuelve 0
      return 0;
    }

    // Calcula cuántos pasteles se pueden hacer con la cantidad de este ingrediente
    let possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);

    // Actualiza el número máximo de pasteles basado en el ingrediente actual
    maxCakes = Math.min(maxCakes, possibleCakes);
  }

  // Devuelve el número máximo de pasteles que se pueden hacer
  return maxCakes;
}
