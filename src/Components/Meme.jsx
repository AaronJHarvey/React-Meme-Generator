import React from 'react';

export default function Meme () {
	return (
		<main>
			<div className='meme-form'>
				<input type='text' className='textbox top-text' placeholder='Top Text' />
				<input type='text' className='textbox bottom-text' placeholder='Bottom Text' />
				<button className='submit'> Get a new meme image 🖼 </button>
			</div>
		</main>
	);
}
