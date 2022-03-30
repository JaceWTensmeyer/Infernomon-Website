import React from 'react';

import './InfernomonCard.scss';

const getStatColor = (stat) => {
	if(stat < 45) return 'red'
	if(stat < 70) return 'orange'
	if(stat < 100) return 'yellow'
	return 'green'
}

const getTypeColor = (type) => {
	switch(type) {
		case "Fire":
		  return 'red';
		case "Water":
		  return 'blue';
		case "Blight":
		  return 'green';
		case "Electric":
		  return 'yellow';
		case "Wind":
		  return 'lightBlue';
		case "Earth":
		  return 'brown';
		case "Arcane":
		  return 'purple';
		case "Toxic":
		  return 'purple';
		case "Normal":
		  return 'gray';
		default:
		  // code block
	  }
}

const getRarityColor = (rarity) => {
	switch(rarity) {
		case "Common":
		  return 'gray';
		case "Uncommon":
		  return 'green';
		case "Rare":
		  return 'blue';
		case "Legendary":
		  return 'purple';
		case "Epic":
		  return 'orange';
		default:
		  // code block
	  }
}

const InfernomonCard = ({ infernomon }) => {
	return (
		<div className='infernomonCardContainer'>
			{console.log(infernomon)}
			<div style={{float: 'left', margin: '5px'}}>#{infernomon.number}</div>
			<div className='name'>{infernomon.name}</div>
			<img
				className='infernomonImg'
				src={require(`../../images/infernomon/${
					infernomon.imageName ?? 'unknown.png'
				}`)}
				alt='Num 1'
				height={200}
				width={200}
			/>
			<div className='type'>Type(s):</div>
			<div style={{ backgroundColor: getTypeColor(infernomon.type1), width: '12%', float: 'left', borderRadius: '5px'}}>{infernomon.type1}</div>
			<div style={{ backgroundColor: getTypeColor(infernomon.type2), width: '12%', float: 'left', borderRadius: '5px'}}>{infernomon.type2}</div>
			<div className='stats'>
				<div>HP: {infernomon.hp}</div> 
				<div>Attack: {infernomon.attack}</div> 
				<div>Defense: {infernomon.defense}</div> 
				<div>Sp Attack: {infernomon.spAttack}</div> 
				<div>Sp Defense: {infernomon.spDefense}</div> 
				<div>Speed: {infernomon.speed}</div> 
			</div>
			<div className='statBars'>
				<div style={{backgroundColor: getStatColor(infernomon.hp), height: '10px', margin: '10px', width: infernomon.hp/1.5 + 'px'}}></div>
				<div style={{backgroundColor: getStatColor(infernomon.attack), height: '10px', margin: '10px', width: infernomon.attack/1.5 + 'px'}}></div>
				<div style={{backgroundColor: getStatColor(infernomon.defense), height: '10px', margin: '10px', width: infernomon.defense/1.5 + 'px'}}></div>
				<div style={{backgroundColor: getStatColor(infernomon.spAttack), height: '10px', margin: '10px', width: infernomon.spAttack/1.5 + 'px'}}></div>
				<div style={{backgroundColor: getStatColor(infernomon.spDefense), height: '10px', margin: '10px', width: infernomon.spDefense/1.5 + 'px'}}></div>
				<div style={{backgroundColor: getStatColor(infernomon.speed), height: '10px', margin: '10px', width: infernomon.speed/1.5 + 'px'}}></div>
			</div>
			<div style={{float: 'left', width: '100%', marginTop: '20px'}}>
				<div style={{float: 'left', textAlign: 'left', paddingLeft: '10px', paddingRight: '10px'}}>Rarity: </div>
				<div style={{float: 'left', paddingRight: '5px'}}>{infernomon.rarity}</div>
				<div style={{float: 'left', height: '20px', width: '20px', borderRadius: '10px', backgroundColor: getRarityColor(infernomon.rarity)}}></div> 
			</div>
			
		</div>
	);
};

export default InfernomonCard;
