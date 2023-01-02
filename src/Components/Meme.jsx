import React, { useState } from 'react';
import memesData from '/src/memesData.jsx';

export default function Meme () {
	// console.log(memesData.data.memes[26].url);
	let meme;
	let [
		memeImage,
		setMemeImage
	] = useState('');

	function getMeme () {
		let items = memesData.data.memes;
		meme = items[Math.floor(Math.random() * items.length)];
		// console.log(meme.url);
		memeImage = setMemeImage((prevImage) => meme.url);
	}

	return (
		<main>
			<div className='meme-form'>
				<input type='text' className='textbox top-text' placeholder='Top Text' />
				<input type='text' className='textbox bottom-text' placeholder='Bottom Text' />
				<button className='submit' onClick={getMeme}>
					Get a new meme image 🖼
				</button>
			</div>

			<img src={memeImage} />
		</main>
	);
}
