import React from 'react';

export default function Meme () {
	return (
		<main>
			<form className='text-form'>
				<input type='text' className='textbox top-text' placeholder='Top Text' />
				<input type='text' className='textbox bottom-text' placeholder='Bottom Text' />
				<button className='submit'> Get a new meme image 🖼 </button>
			</form>
		</main>
	);
}
