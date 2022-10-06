import React from 'react';

interface IGenre {
	genreTag: string;
	activeTheme: string;
}

const Genre = ({ genreTag, activeTheme }: IGenre) => {
	return (
		<div
			className={
				activeTheme === '#262626'
					? 'pop m-[1px] flex w-min whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white'
					: 'pop m-[1px] flex w-min whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-sm text-white'
			}
		>
			<p>{genreTag}</p>
		</div>
	);
};

export default Genre;
