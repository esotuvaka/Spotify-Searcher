import React from 'react';

const Welcome = (themeColor) => {
	return (
		<div className="w-4/5 lg:w-2/3 mx-auto h-screen grid place-items-center">
			<div className="flex flex-col">
				<h1
					className={
						themeColor.themeColor === '#262626'
							? 'text-4xl pop text-white'
							: 'text-4xl pop'
					}
				>
					Search for your favorite artists on Spotify!
				</h1>
				<h2
					className={
						themeColor.themeColor === '#262626'
							? 'text-2xl pop text-white'
							: 'text-2xl pop'
					}
				>
					Use keywords or add their genre if they don't appear first try
				</h2>
			</div>
		</div>
	);
};

export default Welcome;
