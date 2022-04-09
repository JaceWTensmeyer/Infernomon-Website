const infernomon = require('../jsonData/Infernomon.json');
const fs = require('fs');
const { cwd } = require('process');

let txtString = `
function GetGenericInfernomonData(_number){
	switch(_number) {
		case 0: break
`;
let i = 1;
infernomon.forEach((inf) => {
	txtString += `
		case ${i}: return {
			name: "${inf.name}",
			number: _number,
			maxExpPoints: 1000000,
			baseHp: ${inf.hp},
			baseAttack: ${inf.attack}
			baseDefense: ${inf.defense}
			baseSpAttack: ${inf.spAttack}
			baseSpDefense: ${inf.spDefense}
			baseSpeed: ${inf.speed}
			type1: "${inf.type1}"
			type2: "${inf.type2}"
		} break
	`;
	i++;
});

txtString += `
		default: break
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSwitch.txt`,
	txtString
);
