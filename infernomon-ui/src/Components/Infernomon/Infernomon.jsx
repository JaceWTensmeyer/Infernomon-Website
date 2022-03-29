import React from 'react';

import InfernomonJSON from '../../jsonData/Infernomon.json';
import { InfernomonCard } from '../InfernomonCard';

import './Infernomon.scss';

function Infernomon() {
	return (
		<div className='infernomonContainer'>
			{console.log(InfernomonJSON)}
			{InfernomonJSON.map((inf) => (
				<InfernomonCard />
			))}
		</div>
	);
}

export default Infernomon;
