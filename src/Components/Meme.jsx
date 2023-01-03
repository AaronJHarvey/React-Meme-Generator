import React, { useState } from 'react';
import memesData from '/src/memesData.jsx';

export default function Meme () {
	// console.log(memesData.data.memes[26].url);
	let [
		meme,
		setMeme
	] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg'
	});

	const [
		allMemeImages,
		setAllMemeImages
	] = useState(memesData.data.memes);

	function getMeme () {
		let num = Math.floor(Math.random() * allMemeImages.length);
		setMeme((prevState) => ({
			...prevState,
			randomImage: allMemeImages[num].url
		}));
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

			<img className='meme' src={meme.randomImage} />
		</main>
	);
}
