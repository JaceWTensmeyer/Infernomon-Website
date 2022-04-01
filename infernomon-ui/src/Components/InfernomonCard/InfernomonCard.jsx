import React from 'react';

import './InfernomonCard.scss';

const getStatColor = (stat) => {
	if (stat < 40) return 'crimson';
	if (stat < 65) return 'orange';
	if (stat < 90) return 'yellow';
	if (stat < 115) return 'green';
	return 'teal';
};

const getTypeColor = (type) => {
	switch (type) {
		case 'Fire':
			return 'firebrick';
		case 'Water':
			return 'dodgerblue';
		case 'Blight':
			return 'green';
		case 'Electric':
			return 'gold';
		case 'Wind':
			return 'cornflowerBlue';
		case 'Earth':
			return 'goldenrod';
		case 'Arcane':
			return 'deeppink';
		case 'Toxic':
			return 'purple';
		case 'Normal':
			return 'gray';
		default:
		// code block
	}
};

const getRarityColor = (rarity) => {
	switch (rarity) {
		case 'Common':
			return 'gray';
		case 'Uncommon':
			return 'green';
		case 'Rare':
			return 'navy';
		case 'Legendary':
			return 'purple';
		case 'Epic':
			return 'orange';
		default:
		// code block
	}
};

const InfernomonCard = ({ infernomon }) => {
	return (
		<div className='infernomonCardContainer'>
			{console.log(infernomon)}
			<div style={{ float: 'left', margin: '5px' }}>#{infernomon.number}</div>
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
			<div
				style={{
					backgroundColor: getTypeColor(infernomon.type1),
					width: '12%',
					float: 'left',
					borderRadius: '5px',
				}}
			>
				{infernomon.type1}
			</div>
			<div
				style={{
					backgroundColor: getTypeColor(infernomon.type2),
					width: '12%',
					float: 'left',
					borderRadius: '5px',
				}}
			>
				{infernomon.type2}
			</div>
			{/* Stats */}
			<div className='stats'>
				<div>HP: {infernomon.hp}</div>
				<div>Attack: {infernomon.attack}</div>
				<div>Defense: {infernomon.defense}</div>
				<div>Sp Attack: {infernomon.spAttack}</div>
				<div>Sp Defense: {infernomon.spDefense}</div>
				<div>Speed: {infernomon.speed}</div>
				<div>
					Total:{' '}
					{infernomon.hp +
						infernomon.attack +
						infernomon.defense +
						infernomon.spAttack +
						infernomon.spDefense +
						infernomon.speed}
				</div>
			</div>
			{/* Stat bars */}
			<div className='statBars'>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.hp),
						height: '10px',
						margin: '10px',
						width: infernomon.hp / 1.5 + 'px',
					}}
				></div>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.attack),
						height: '10px',
						margin: '10px',
						width: infernomon.attack / 1.5 + 'px',
					}}
				></div>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.defense),
						height: '10px',
						margin: '10px',
						width: infernomon.defense / 1.5 + 'px',
					}}
				></div>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.spAttack),
						height: '10px',
						margin: '10px',
						width: infernomon.spAttack / 1.5 + 'px',
					}}
				></div>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.spDefense),
						height: '10px',
						margin: '10px',
						width: infernomon.spDefense / 1.5 + 'px',
					}}
				></div>
				<div
					style={{
						backgroundColor: getStatColor(infernomon.speed),
						height: '10px',
						margin: '10px',
						width: infernomon.speed / 1.5 + 'px',
					}}
				></div>
			</div>
			{/* Rarity */}
			<div style={{ float: 'left', width: '100%', marginTop: '20px' }}>
				<div
					style={{
						float: 'left',
						textAlign: 'left',
						paddingLeft: '10px',
						width: '20%',
					}}
				>
					Rarity:{' '}
				</div>
				<div style={{ float: 'left', paddingRight: '5px' }}>
					{infernomon.rarity}
				</div>
				<div
					style={{
						float: 'left',
						height: '20px',
						width: '20px',
						borderRadius: '10px',
						backgroundColor: getRarityColor(infernomon.rarity),
					}}
				></div>
			</div>
			{/* Role */}
			<div style={{ float: 'left', width: '100%', marginTop: '10px' }}>
				<div
					style={{
						float: 'left',
						paddingLeft: '10px',
						textAlign: 'left',
						width: '20%',
					}}
				>
					Role:{' '}
				</div>
				<div style={{ float: 'left' }}>{infernomon.role}</div>
			</div>
			{/* Description */}
			<div
				style={{
					float: 'left',
					width: '100%',
					marginTop: '10px',
					height: '50px',
				}}
			>
				<div
					style={{
						float: 'left',
						paddingLeft: '10px',
						textAlign: 'left',
						width: '20%',
						height: '70px',
					}}
				>
					Description:{' '}
				</div>
				<div style={{ textAlign: 'left' }}>{infernomon.description}</div>
			</div>
		</div>
	);
};

export default InfernomonCard;
