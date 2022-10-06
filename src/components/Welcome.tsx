import React from 'react';

interface IWelcome {
	activeTheme: string;
}

const Welcome = ({ activeTheme }: IWelcome) => {
	return (
		<div className="mx-auto grid h-screen w-4/5 place-items-center lg:w-2/3">
			<div className="flex flex-col">
				<h1
					className={
						activeTheme === '#262626'
							? 'pop text-4xl text-white'
							: 'pop text-4xl'
					}
				>
					Search for your favorite artists on Spotify!
				</h1>
				<h2
					className={
						activeTheme === '#262626'
							? 'pop text-2xl text-white'
							: 'pop text-2xl'
					}
				>
					Use keywords or add their genre if they don't appear first try
				</h2>
			</div>
		</div>
	);
};

export default Welcome;
