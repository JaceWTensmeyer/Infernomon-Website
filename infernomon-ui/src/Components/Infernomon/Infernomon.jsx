import React from 'react';

import InfernomonJSON from '../../jsonData/Infernomon.json';
import { InfernomonCard } from '../InfernomonCard';

import './Infernomon.scss';

const Infernomon = () => {
	return (
		<div className='infernomonContainer'>
			{InfernomonJSON.map((inf) => (
				<InfernomonCard infernomon={inf} />
			))}
		</div>
	);
};

export default Infernomon;
