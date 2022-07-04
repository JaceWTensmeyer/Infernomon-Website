const infernomon = require('../jsonData/Infernomon.json');
const fs = require('fs');

let txtString = `
function GetSpritesForInfernomon(_number){
	switch(_number) {
		case 0: break`;
let i = 1;
infernomon.forEach((inf) => {
	txtString += `
		case ${i}: {
			spriteIdle = ${
				inf.idleSprite ? 'spr_IdleNum' + i : 'spr_InventoryImageNum' + i
			} 
			spriteMove = ${
				inf.moveSprite ? 'spr_MoveNum' + i : 'spr_InventoryImageNum' + i
			} 
			spritePortrait = ${
				inf.portraitSprite ? 'spr_PortraitNum' + i : 'spr_InventoryImageNum' + i
			} 
			spriteInventoryImage = ${'spr_InventoryImageNum' + i} 
		} break`;
	i++;
});

txtString += `
		default: {
			spriteIdle = spr_IdleNum0
			spriteMove = spr_MoveNum0
			spritePortrait = spr_PortraitNum0
			spriteInventoryImage = spr_InventoryImageNum0
		}
	}
}
`;

txtString += `
function GetSpritesForInfernomonStruct(_number){
	switch(_number) {
		case 0: break`;

i = 1;
infernomon.forEach((inf) => {
	txtString += `
		case ${i}: return {
			spriteIdle: ${inf.idleSprite ? 'spr_IdleNum' + i : 'spr_InventoryImageNum' + i},
			spriteMove: ${inf.moveSprite ? 'spr_MoveNum' + i : 'spr_InventoryImageNum' + i},
			spritePortrait: ${
				inf.portraitSprite ? 'spr_PortraitNum' + i : 'spr_InventoryImageNum' + i
			}, 
			spriteInventoryImage: ${'spr_InventoryImageNum' + i} 
		} break`;
	i++;
});
txtString += `
		default: return {
			spriteIdle: spr_IdleNum0,
			spriteMove: spr_MoveNum0,
			spritePortrait: spr_PortraitNum0,
			spriteInventoryImage: spr_InventoryImageNum0
		}
	}
}
`;

fs.writeFileSync(
	`A:/Projects/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSpriteSwitch.txt`,
	// `C:/Users/jtenz/Documents/Infernomon-Website/infernomon-ui/src/scripts/outputTxt/infernomonSpriteSwitch.txt`,
	txtString
);
