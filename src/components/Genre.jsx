import React from 'react';

const Genre = ({ genreTag, activeTheme }) => {
	return (
		<div
			className={
				activeTheme === '#262626'
					? 'pop bg-black text-white flex px-2 py-1 m-[1px] text-sm rounded whitespace-nowrap w-min'
					: 'pop bg-neutral-800 text-white flex px-2 py-1 m-[1px] text-sm rounded whitespace-nowrap w-min'
			}
		>
			<p>{genreTag}</p>
		</div>
	);
};

export default Genre;
