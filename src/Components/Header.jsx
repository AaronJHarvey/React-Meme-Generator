import React from 'react';
import Troll from '../images/troll-face.png';

export default function Header () {
	return (
		<div className='header-container'>
			<img src={Troll} />
			<h1 className='header-text'>Meme Generator</h1>
		</div>
	);
}
