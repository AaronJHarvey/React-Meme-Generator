import React from 'react';

export default function Meme () {
	return (
		<form>
			<input type='text' className='textbox top-text' placeholder='Top Text' />
			<input type='text' className='textbox bottom-text' placeholder='Bottom Text' />
			<button className='submit'>Submit</button>
		</form>
	);
}
