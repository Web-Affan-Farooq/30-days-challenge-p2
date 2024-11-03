var recipe = {
    ingredients: "1/2 c Blanched almonds|6 Garlic cloves|1 tb Fresh gingerroot, minced|2 tb Vegetable oil|2 lb Chicken thighs, skinned|6 Whole cloves|3 Bay leaves|2 Onions, chopped|1 Cinnamon stick|1 ts Ground coriander|1 ts Cumin|1 ts Cardamom|1 ts Salt|1/4 ts Cayenne pepper|1/2 c Plain yogurt|Fresh coriander, chopped",
    instructions: "in blender or food processor, pure blanched almonds, garlic, ginger and 1/3 cup water until smooth. In large saucepan or Dutch oven, heat oil over medium-high heat; brown chicken on all sides. Remove and set aside. Stir in cloves, bay leaves, onions and cinnamon; cook for 5 minutes or until onions are lightly browned. Add almond mixture to saucepan along with coriander, cumin, cardamom, salt and cayenne pepper; cook, stirring for 3 minutes or until lightly browned. Return chicken to saucepan along with 1/2 cup water; cover and simmer for about 30 minutes or until juices run clear when chicken is pierced. Stir in yogurt, 1 tb at a time. Discard cinnamon stick, cloves and bay leaves. Garnish with coriander. 4 servings for $7.54 CDN [Mar/95] Serve with bowls of chutney, toasted almonds and yogurt. ",
    servings: "4 Servings",
    title: "Budget Chicken Korma"
};
var convert = function (ingredientString) {
    return ingredientString.split("|");
};
console.log(convert(recipe.ingredients));
