import React from 'react';

import './InfernomonCard.scss';

const getStatColor = (stat) => {
	if (stat < 69) return 'gray';
	if (stat < 94) return '#47f566';
	if (stat < 119) return '#4ab1ff';
	if (stat < 144) return '#ab32e6';
	return '#f5ce4e';
};

const getTypeColor = (type) => {
	switch (type) {
		case 'Fire':
			return '#b22222';
		case 'Water':
			return '#1e90ff';
		case 'Blight':
			return 'green';
		case 'Electric':
			return '#ffd700';
		case 'Wind':
			return '#6494ed';
		case 'Earth':
			return '#daa520';
		case 'Arcane':
			return '#ff1493';
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
			return '#47f566';
		case 'Rare':
			return '#4ab1ff';
		case 'Epic':
			return '#ab32e6';
		case 'Legendary':
			return '#f5ce4e';
		default:
		// code block
	}
};

const InfernomonCard = ({
	infernomon,
	activeInfernomon,
	setActiveInfernomon,
}) => {
	return (
		<div>
			{activeInfernomon === infernomon.name ? (
				<div className='infernomonCardContainerOpen'>
					<div>
						<div style={{ float: 'left', margin: '5px', width: '100%' }}>
							#{infernomon.number}-{infernomon.name}
						</div>
						<img
							style={{
								backgroundImage: `linear-gradient(to bottom right,${
									infernomon.type2 !== ''
										? getTypeColor(infernomon.type2)
										: 'white'
								},${getTypeColor(infernomon.type1)},${
									infernomon.type2 !== ''
										? getTypeColor(infernomon.type2)
										: 'white'
								})`,
							}}
							className='infImgOpen'
							src={require(`../../images/infernomon/${
								infernomon.imageName ?? 'unknown.png'
							}`)}
							alt='Num 1'
						/>
					</div>
					<div className='typesContainer'>
						<div className='typeHeader'>Type(s):</div>
						<div
							className='type'
							style={{
								backgroundColor: getTypeColor(infernomon.type1),
							}}
						>
							{infernomon.type1}
						</div>
						<div
							className='type'
							style={{
								backgroundColor: getTypeColor(infernomon.type2),
							}}
						>
							{infernomon.type2}
						</div>
					</div>

					{/* Stats */}
					<div className='stats'>
						<div>HP: {infernomon.hp}</div>
						{infernomon.attack > 0 && <div>Attack: {infernomon.attack}</div>}
						<div>Defense: {infernomon.defense}</div>
						{infernomon.spAttack > 0 && (
							<div>Sp Attack: {infernomon.spAttack}</div>
						)}
						<div>Sp Defense: {infernomon.spDefense}</div>
						<div>Agility: {infernomon.agility}</div>
						<div>
							Total:{' '}
							{infernomon.hp +
								infernomon.attack +
								infernomon.defense +
								infernomon.spAttack +
								infernomon.spDefense +
								infernomon.agility}
						</div>
					</div>
					{/* Stat bars */}
					<div className='statBarsContainer'>
						<div
							className='statBar'
							style={{
								backgroundImage: `linear-gradient(white, ${getStatColor(
									infernomon.hp
								)})`,
								width: infernomon.hp / 1.5 + 'px',
							}}
						></div>
						{infernomon.attack > 0 && (
							<div
								className='statBar'
								style={{
									backgroundImage: `linear-gradient(white, ${getStatColor(
										infernomon.attack
									)})`,
									width: infernomon.attack / 1.5 + 'px',
								}}
							></div>
						)}
						<div
							className='statBar'
							style={{
								backgroundImage: `linear-gradient(white, ${getStatColor(
									infernomon.defense
								)})`,
								width: infernomon.defense / 1.5 + 'px',
							}}
						></div>
						{infernomon.spAttack > 0 && (
							<div
								className='statBar'
								style={{
									backgroundImage: `linear-gradient(white, ${getStatColor(
										infernomon.spAttack
									)})`,
									width: infernomon.spAttack / 1.5 + 'px',
								}}
							></div>
						)}
						<div
							className='statBar'
							style={{
								backgroundImage: `linear-gradient(white, ${getStatColor(
									infernomon.spDefense
								)})`,
								width: infernomon.spDefense / 1.5 + 'px',
							}}
						></div>
						<div
							className='statBar'
							style={{
								backgroundImage: `linear-gradient(white, ${getStatColor(
									infernomon.agility
								)})`,
								width: infernomon.agility / 1.5 + 'px',
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
					<div className='description'>
						<div>{infernomon.description}</div>
					</div>
					<div className='detailsBtn' onClick={() => setActiveInfernomon('')}>
						Close
					</div>
				</div>
			) : (
				<div
					// style={{
					// 	backgroundImage: `linear-gradient(white,${getRarityColor(
					// 		infernomon.rarity
					// 	)})`,
					// }}
					className='infernomonCardContainerClosed'
				>
					<div style={{ float: 'left', margin: '5px' }}>
						#{infernomon.number}-{infernomon.name}
					</div>
					<img
						style={{
							backgroundImage: `linear-gradient(to bottom right,${
								infernomon.type2 !== ''
									? getTypeColor(infernomon.type2)
									: 'white'
							},${getTypeColor(infernomon.type1)},${
								infernomon.type2 !== ''
									? getTypeColor(infernomon.type2)
									: 'white'
							})`,
						}}
						className='infImgClosed'
						src={require(`../../images/infernomon/${
							infernomon.imageName ?? 'unknown.png'
						}`)}
						alt='Num 1'
					/>
					<div
						className='detailsBtn'
						onClick={() => setActiveInfernomon(infernomon.name)}
					>
						Details
					</div>
				</div>
			)}
		</div>
	);
};

export default InfernomonCard;
