import React from 'react';

import AboutText from '../../jsonData/aboutText.json';

import './About.scss';

function About() {
	return (
		<div className='container'>
			<div className='sectionContainer'>
				<div className='section'>
					<div className='sectionHeader'>Overview</div>
					<div className='sectionText'>{AboutText.introduction}</div>
					<img
						className='titleImage'
						src={require(`../../images/TitleArt.png`)}
						height={400}
					></img>
				</div>
			</div>
			<div className='sectionContainer'>
				<div className='section'>
					<div className='sectionHeader'>Infernomon</div>
					<div className='sectionText'>{AboutText.infernomon}</div>
					<img
						className='titleImage'
						src={require(`../../images/Starters.png`)}
						height={300}
					></img>
				</div>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Dungeons</div>
				<div className='sectionText'>{AboutText.dungeons}</div>
				<img
					className='titleImage'
					src={require(`../../images/FireDungeonEntrance.png`)}
					height={300}
				></img>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Battling</div>
				<div className='sectionText'>{AboutText.battling}</div>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Professions</div>
				<div className='sectionText'>{AboutText.professions}</div>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Auction House</div>
				<div className='sectionText'>{AboutText.auctionHouse}</div>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Attacks</div>
				<div className='sectionText'>{AboutText.attacks}</div>
			</div>
			<div className='sectionContainer'></div>
			<div className='section'>
				<div className='sectionHeader'>Items</div>
				<div className='sectionText'>{AboutText.items}</div>
			</div>
		</div>
	);
}

export default About;
