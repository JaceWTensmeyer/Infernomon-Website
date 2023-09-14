import React, { useState } from 'react';

import InfernomonJSON from '../../jsonData/Infernomon.json';
import { InfernomonCard } from '../InfernomonCard';

import './Infernomon.scss';

const Infernomon = () => {
	const [activeInfernomon, setActiveInfernomon] = useState('');
	return (
		<div
			className={window.innerWidth > 1200 ? 'infernomonContainerMargins' : ''}
		>
			{InfernomonJSON.map((inf) => (
				<InfernomonCard
					key={inf.name}
					infernomon={inf}
					activeInfernomon={activeInfernomon}
					setActiveInfernomon={setActiveInfernomon}
				/>
			))}
		</div>
	);
};

export default Infernomon;
