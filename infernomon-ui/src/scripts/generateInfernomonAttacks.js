const attacks = require('../jsonData/attacks.json');
const fs = require('fs');

let txtString = `
function GetAttack(_id){
	switch(_id) {
		case 0: break`;
let i = 1;
attacks.forEach((atk) => {
	txtString += `
		case ${atk.id}: return {
			id: ${atk.id},
			attackCategory: "${atk.attackCategory}",
			damageCategory: "${atk.damageCategory}",
			name: "${atk.name}",
			scriptName: ${'AttackId' + atk.id},
			description: "${atk.description}",
			castType: "${atk.castType}",
			castDuration: ${atk.castDuration},
			range: ${atk.range},
			type: "${atk.type}",
			damage: ${atk.damage},
			cooldown: ${atk.cooldown},
			dotDamage: ${atk.dotDamage},
			dotDuration: ${atk.dotDuration},
			statusEffect: "${atk.statusEffect}",
			statusEffectChance: ${atk.statusEffectChance},
			statusReductionPercentage: "${atk.statusReductionPercentage}",
			statusEffectDuration: ${atk.statusEffectDuration}
		} break`;
	i++;
});

txtString += `
		default: break
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/attackSwitch.txt`,
	txtString
);
