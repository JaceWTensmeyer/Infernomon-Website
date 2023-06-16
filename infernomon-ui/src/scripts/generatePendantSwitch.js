const pendants = require('../jsonData/pendant.json');
const fs = require('fs');

let txtString = `
function GetPendentStruct(_dungeonNumber){
	switch(_dungeonNumber) {
		case 0: break`;
let i = 1;
pendants.forEach((pen) => {
	txtString += `
		case ${pen.dungeonNumber}: return {
			name: "${pen.name}",
			description: "${pen.description}",
			effectPercentage: ${pen.effectPercentage},
			dungeonNumber: ${pen.dungeonNumber}
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
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/pendantSwitch.txt`,
	txtString
);
