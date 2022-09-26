import React from 'react';
import Logo from '../assets/S-Logo.png';
import Genre from './Genre';

const ArtistCard = ({ props, genresNum, links, activeTheme }) => {
	return (
		<div id="artist-card" className="w-4/5 lg:w-2/3 mx-auto pb-4">
			<div
				className={
					activeTheme === '#262626'
						? 'bg-neutral-800 transition-all duration-300 shadow-md shadow-black rounded-lg flex sm:flex-row flex-col sm:h-96 justify-between 2xl:h-[50vh]'
						: 'bg-white transition-all duration-300 shadow-md shadow-neutral-700 rounded-lg flex sm:flex-row flex-col sm:h-96 justify-between 2xl:h-[50vh]'
				}
			>
				<div className="mx-[5%] my-[5%]">
					<h1
						id="artist-name"
						className={
							activeTheme === '#262626'
								? 'pop text-4xl text-white'
								: 'pop text-4xl text-black'
						}
					>
						{props.name}
					</h1>
					<p
						id="artist-followers"
						className={
							activeTheme === '#262626'
								? 'pop text-xl text-neutral-300'
								: 'pop text-xl text-neutral-800'
						}
					>
						{props.followers.total
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
						Followers
					</p>
					<div id="artist-links" className="flex mt-4">
						<button className="px-2 py-1 bg-green-600 text-white pop w-[90px] rounded shadow-sm shadow-neutral-700 hover:shadow-md hover:shadow-neutral-700 transition-all duration-300 hover:-translate-y-0.5">
							<a
								target="_blank"
								rel="noreferrer"
								href={
									links === 'browser' ? props.external_urls.spotify : props.uri
								}
								className="flex justify-between items-center w-full"
							>
								Open <img src={Logo} alt="Spotify logo" className="h-6" />
							</a>
						</button>
					</div>
					<div id="artist-genres" className="w-full flex flex-col mt-4 ">
						{React.Children.toArray(
							props.genres
								?.slice(0, genresNum)
								.map((genre) => (
									<>
										{genre && (
											<Genre genreTag={genre} activeTheme={activeTheme} />
										)}
									</>
								))
						)}
					</div>
				</div>
				<div id="artist-image" className>
					<img
						src={props.images[0].url}
						alt="/"
						className="rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none w-full sm:h-96 2xl:h-[50vh]"
					/>
				</div>
			</div>
		</div>
	);
};

export default ArtistCard;
