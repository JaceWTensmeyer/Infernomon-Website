import React from 'react';

import './InfernomonCard.scss';

const InfernomonCard = ({ infernomon }) => {
	return (
		<div className='infernomonCardContainer'>
			{console.log(infernomon)}
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
			<div className='stats'>
				HP: {infernomon.hp}
				Attack: {infernomon.attack}
			</div>
		</div>
	);
};

export default InfernomonCard;
