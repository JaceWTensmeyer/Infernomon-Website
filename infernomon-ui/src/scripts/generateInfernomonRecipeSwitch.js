const recipes = require('../jsonData/infernomonRecipe.json');
const fs = require('fs');

let txtString = `
function GetInfernomonRecipe(_number){
	switch(_number) {`;
let i = 1;
recipes.forEach((recipe) => {
	for (var j = 0; j < recipe.numbers.length; j++) {
		txtString += `
		case ${i}:`;
		i++;
	}
	txtString += ` return {
			number: ${recipe.number},
			might: ${recipe.recipe[0]},
			percision: ${recipe.recipe[1]},
			fortitude: ${recipe.recipe[2]},
			harmony: ${recipe.recipe[3]},
			wisdom: ${recipe.recipe[4]},
			power: ${recipe.recipe[5]},
			intelligence: ${recipe.recipe[6]},
			concentration: ${recipe.recipe[7]},
			promptitude: ${recipe.recipe[8]},
		}`;
});

txtString += `
		default: break
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonRecipeSwitch.txt`,
	// `C:/Users/jtenz/Documents/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSwitch.txt`,
	txtString
);
