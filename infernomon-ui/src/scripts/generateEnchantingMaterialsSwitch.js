const enchantingMaterials = require('../jsonData/enchantingMaterials.json');
const fs = require('fs');

let txtString = `
function GetEnchantingMaterialStruct(_id){
	switch(_id) {
		case 0: break`;
let i = 1;
enchantingMaterials.forEach((eM) => {
	txtString += `
		case ${eM.id}: return {
			id: ${eM.id},
			name: "${eM.name}",
			type: "${eM.type}",
			dungeonNumber: ${eM.dungeonNumber},
		} break`;
});

txtString += `
		default: break
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/enchantingMaterialSwitch.txt`,
	txtString
);
