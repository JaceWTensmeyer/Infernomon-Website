const infernomon = require('../jsonData/Infernomon.json');
const fs = require('fs');
const recipes = require('../jsonData/infernomonRecipe.json');

let txtString = `
function GetGenericInfernomonData(_number){
	switch(_number) {
		case 0: break`;
let i = 1;
infernomon.forEach((inf) => {
	txtString += `
		case ${i}: return {
			name: "${inf.name}",
			number: _number,
			description: "${inf.description}",
			animationScale: ${inf.animationScale},
			maxExpPoints: 1000000,
			baseHp: ${inf.hp},
			baseAttack: ${inf.attack},
			baseDefense: ${inf.defense},
			baseSpAttack: ${inf.spAttack},
			baseSpDefense: ${inf.spDefense},
			baseAgility: ${inf.agility},
			type1: "${inf.type1}",
			type2: "${inf.type2}",
			attackDamageCategory: "${inf.attackDamageCategory}",
			autoAttack1Id: ${inf.autoAttack1Id},
			autoAttack2Id: ${inf.autoAttack2Id},
			naturalAttack1Id: ${inf.naturalAttack1Id},
			naturalAttack2Id: ${inf.naturalAttack2Id},
			naturalAttack3Id: ${inf.naturalAttack3Id},
			recipe: ${
				recipes.find((x) => x.number === i)
					? '[' + recipes.find((x) => x.number === i).recipe + ']'
					: undefined
			},
			rarity: "${inf.rarity}"
		} break`;
	i++;
});

txtString += `
		default: break
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSwitch.txt`,
	// `C:/Users/jtenz/Documents/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSwitch.txt`,
	txtString
);
