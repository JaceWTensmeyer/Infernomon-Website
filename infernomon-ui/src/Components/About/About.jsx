import React from 'react';

import AboutText from '../../jsonData/aboutText.json';

import './About.scss';

function About() {
	return (
		<div className='container'>
			<div className='section'>
				<div className='sectionHeader'>Introduction</div>
				<div className='sectionText'>{AboutText.introduction}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Infernomon</div>
				<div className='sectionText'>{AboutText.infernomon}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Dungeons</div>
				<div className='sectionText'>{AboutText.dungeons}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Battling</div>
				<div className='sectionText'>{AboutText.battling}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Professions</div>
				<div className='sectionText'>{AboutText.professions}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Auction House</div>
				<div className='sectionText'>{AboutText.auctionHouse}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Attacks</div>
				<div className='sectionText'>{AboutText.attacks}</div>
			</div>
			<div className='section'>
				<div className='sectionHeader'>Items</div>
				<div className='sectionText'>{AboutText.items}</div>
			</div>
		</div>
	);
}

export default About;
